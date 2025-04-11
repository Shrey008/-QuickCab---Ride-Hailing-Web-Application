const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');
const bcrypt = require('bcrypt');
const crypto = require('crypto');


async function getFare(pickup, destination, apiKey) {
    if (!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    } 

 
    const distanceTime = await mapService.getDistanceTime(pickup, destination, apiKey);
    if (!distanceTime || !distanceTime.distanceValue || !distanceTime.durationValue) {
        throw new Error('Unable to calculate distance or duration');
    }
    

    const baseFare = {
        auto: 30,
        car: 45,
        moto: 20
    };

    const perKmRate = {
        auto: 9,
        car: 12,
        moto: 6
    };

    const perMinuteRate = {
        auto: 1.2,
        car: 2.5,
        moto: 1
    };

    const fare = {
        auto: Math.round(baseFare.auto + ((distanceTime.distanceValue / 1000) * perKmRate.auto) + ((distanceTime.durationValue / 60) * perMinuteRate.auto)),
        car: Math.round(baseFare.car + ((distanceTime.distanceValue / 1000) * perKmRate.car) + ((distanceTime.durationValue / 60) * perMinuteRate.car)),
        moto: Math.round(baseFare.moto + ((distanceTime.distanceValue / 1000) * perKmRate.moto) + ((distanceTime.durationValue / 60) * perMinuteRate.moto))
    };

    return fare;
}

module.exports.getFare = getFare;

function getOtp(num) {
    function generateOtp(num) {
        const otp = crypto.randomInt(Math.pow(10, num - 1), Math.pow(10, num)).toString();
        return otp;
    }
    return generateOtp(num);
}

module.exports.createRide = async ({ user, pickup, destination, vehicleType, apiKey }) => {
    if (!user || !pickup || !destination || !vehicleType || !apiKey) {
        throw new Error('All fields are required');
    }

    const fare = await getFare(pickup, destination, apiKey);

    const ride = await rideModel.create({
        user,
        pickup,
        destination,
        otp: getOtp(6),
        fare: fare[vehicleType]
    });
    return ride;
}

module.exports.confirmRide = async ({
    rideId,captain, apiKey
}) => {
    if (!rideId) {
        throw new Error('Ride id is required');
    }

    const ride = await rideModel.findOneAndUpdate(
        { _id: rideId },
        { status: 'accepted', captain: captain._id },
        { new: true }
    ).populate('user');  // Ensure user is populated
    

    if (!ride) {
        throw new Error('Ride not found');
    }

    return ride;

}











//  module.exports.cancelRide = async({
//     rideId, apiKey
// }) => {
//     if (!rideId) {
//         throw new Error('Ride id is required');
//     }

//     const ride = await rideModel.findOneAndUpdate({
//         _id: ride
//     }, {
//         status: 'cancelled'
//     })

//     const ride = await rideModel.findOne({
//         _id: rideId
//     })
//     // }).populate('user').populate('captain').select('+otp');

//     // if (!ride) {
//     //     throw new Error('Ride not found');
//     // }

//     ride.status = 'accepted';

//     return ride.save();

// }
































