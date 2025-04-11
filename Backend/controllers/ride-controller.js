const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');
const mapService = require('../services/maps.service');
const { sendMessageToSocketId } = require('../socket');
 
const rideModel = require('../models/ride.model');
 
module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const {userId, pickup, destination, vehicleType, apiKey } = req.body;

    try {
        if (!req.user || !req.user._id) {
            throw new Error('User not authenticated: Missing req.user or req.user._id');
        }

        const pickupCoordinates = await mapService.getAddressCoordinate(pickup, apiKey);
        if (!pickupCoordinates || typeof pickupCoordinates.lat !== 'number' || typeof pickupCoordinates.lng !== 'number') {
            throw new Error('Invalid pickup coordinates');
        }

        const destinationCoordinates = await mapService.getAddressCoordinate(destination, apiKey);
        if (!destinationCoordinates || typeof destinationCoordinates.lat !== 'number' || typeof destinationCoordinates.lng !== 'number') {
            throw new Error('Invalid destination coordinates');
        }

        const ride = await rideService.createRide({
            user: req.user._id,
            pickup,
            destination,
            vehicleType,
            apiKey
        });
        res.status(201).json({ ride });

         pickupCoordinates = await mapService.getAddressCoordinate(pickup, apiKey);

        // if (!pickupCoordinates || typeof pickupCoordinates.lat !== 'number' || typeof pickupCoordinates.lng !== 'number') {
        //     console.error('Invalid coordinates:', pickupCoordinates);
        //     return res.status(400).json({ message: 'Invalid pickup coordinates' });
        // }

        console.log('Pickup coordinates:', pickupCoordinates);
        const response = await mapService.getAddressCoordinate(pickup, apiKey);
console.log('API Response:', response);


        // Create the ride
        //  ride = await rideService.createRide({
        //     user: req.user._id,
        //     pickup,
        //     destination,
        //     vehicleType,
        //     apiKey,
        // });

        // Send the ride response to the client
        

        //  pickupCoordinates = await mapService.getAddressCoordinate(pickup, apiKey);
        //  console.log(pickupCoordinates);

        // Find captains in the radius and log to the console
        const captainsInRadius = await mapService.getCaptainsInTheRadius(
              pickupCoordinates.lat,
              pickupCoordinates.lng,
              3
        );

        console.log('Captains found in radius:', captainsInRadius);

         ride.otp = ""

        //  const rideWithUser = await rideModel.findOne({_id : ride._id}).populate('user');

        //  captainsInRadius.forEach(captain => {
        //     const { socketId } = captain;  // Access captain's socketId
        //     if (socketId) {
        //         sendMessageToSocketId(socketId, { event: 'new-ride', data:  ride });
        //         console.log(`Message sent to captain ${captain._id} with socketId ${socketId}`);
        //     } else {
        //         console.warn(`Captain ${captain._id} does not have a valid socketId`);
        //     }
        // });


        const rideWithUser = await rideModel
    .findOne({ _id: ride._id })
    .populate({
        path: 'user', // Populate the 'user' field
        select: 'email fullname _id', // Include email, fullname, and _id
    });

captainsInRadius.forEach(captain => {
    const { socketId } = captain; // Access captain's socketId
    if (socketId) {
        const rideData = {
            ...rideWithUser.toObject(), // Convert Mongoose document to plain object
        };

        sendMessageToSocketId(socketId, { event: 'new-ride', data: rideData });
        console.log(`Message sent to captain ${captain._id} with socketId ${socketId}`);
    } else {
        console.warn(`Captain ${captain._id} does not have a valid socketId`);
    }
});



        

        // const rideWithUser = await rideModel.findById(ride._id).populate('user');
        // captainsInRadius.map(captain => {

        //     console.log(captain, ride);

        //     sendMessageToSocketId(
        //         captain.socketId, // Target captain's socket ID
        //         {
        //             event: 'new-ride', // Event name
        //             data: rideWithUser // Data about the new ride
        //         }
        //     );
        // });

        // console.log('Captains found in radius:', captainsInRadius);
    } catch (err) {
        console.error('Error in createRide:', err.message);
        if (!res.headersSent) {
            return res.status(500).json({ message: err.message });
        }
    }
};  

        // ride.otp = ""

        // const rideWithUser = await rideModel.findById(ride._id).populate('user');
        // captainsInRadius.map(captain => {

        //     console.log(captain, ride);

        //     sendMessageToSocketId(
        //         captain.socketId, // Target captain's socket ID
        //         {
        //             event: 'new-ride', // Event name
        //             data: rideWithUser // Data about the new ride
        //         }
        //     );
        // });

        // console.log('Captains found in radius:', captainsInRadius);
    
        // module.exports.createRide = async (req, res) => {
        //     const errors = validationResult(req);
        //     if (!errors.isEmpty()) {
        //         return res.status(400).json({ errors: errors.array() });
        //     }
        
        //     const { userId, pickup, destination, vehicleType, apiKey } = req.body;
        
        //     try {
        //         // Check for authenticated user
        //         if (!req.user || !req.user._id) {
        //             throw new Error('User not authenticated: Missing req.user or req.user._id');
        //         }
        
        //         // Fetch pickup coordinates
        //         let pickupCoordinates;
        //         try {
        //             pickupCoordinates = await mapService.getAddressCoordinate(pickup, apiKey);
        //             if (!pickupCoordinates || typeof pickupCoordinates.lat !== 'number' || typeof pickupCoordinates.lng !== 'number') {
        //                 throw new Error('Invalid pickup coordinates');
        //             }
        //         } catch (error) {
        //             if (error.response?.status === 403) {
        //                 console.error('API Key issue: Forbidden request. Check your API key and permissions.');
        //                 throw new Error('Failed to fetch pickup coordinates due to API key restrictions');
        //             }
        //             throw new Error(`Error fetching pickup coordinates: ${error.message}`);
        //         }
        
        //         // Fetch destination coordinates
        //         let destinationCoordinates;
        //         try {
        //             destinationCoordinates = await mapService.getAddressCoordinate(destination, apiKey);
        //             if (!destinationCoordinates || typeof destinationCoordinates.lat !== 'number' || typeof destinationCoordinates.lng !== 'number') {
        //                 throw new Error('Invalid destination coordinates');
        //             }
        //         } catch (error) {
        //             if (error.response?.status === 403) {
        //                 console.error('API Key issue: Forbidden request. Check your API key and permissions.');
        //                 throw new Error('Failed to fetch destination coordinates due to API key restrictions');
        //             }
        //             throw new Error(`Error fetching destination coordinates: ${error.message}`);
        //         }
        
        //         // Create the ride
        //         const ride = await rideService.createRide({
        //             user: req.user._id,
        //             pickup,
        //             destination,
        //             vehicleType,
        //             apiKey,
        //         });
        
        //         console.log('Ride created successfully:', ride);
        
        //         // Find captains in radius
        //         const captainsInRadius = await mapService.getCaptainsInTheRadius(
        //             pickupCoordinates.lat,
        //             pickupCoordinates.lng,
        //             3 // Radius in kilometers
        //         );
        
        //         console.log('Captains found in radius:', captainsInRadius);
        
        //         // Populate ride with user details
        //         const rideWithUser = await rideModel
        //             .findOne({ _id: ride._id })
        //             .populate({
        //                 path: 'user', // Populate the 'user' field
        //                 select: 'email fullname _id', // Include email, fullname, and _id
        //             });
        
        //         // Send ride data to captains via socket
        //         captainsInRadius.forEach((captain) => {
        //             const { socketId } = captain; // Access captain's socketId
        //             if (socketId) {
        //                 const rideData = {
        //                     ...rideWithUser.toObject(), // Convert Mongoose document to plain object
        //                 };
        
        //                 sendMessageToSocketId(socketId, { event: 'new-ride', data: rideData });
        //                 console.log(`Message sent to captain ${captain._id} with socketId ${socketId}`);
        //             } else {
        //                 console.warn(`Captain ${captain._id} does not have a valid socketId`);
        //             }
        //         });
        
        //         // Respond with the ride details
        //         res.status(201).json({ ride });
        //     } catch (err) {
        //         console.error('Error in createRide:', err.message);
        
        //         // Send error response if headers not sent
        //         if (!res.headersSent) {
        //             res.status(500).json({ message: err.message });
        //         }
        //     }
        // };
        

// module.exports.getFare = async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//         return res.status(400).json({ errors: errors.array() });
//     }

//     const { pickup, destination, vehicleType, apiKey } = req.body;

//     try {
//         const fare = await rideService.getFare(pickup, destination, vehicleType, apiKey);
//         return res.status(200).json(fare);
//     } catch (err) {
//         console.error('Error in getFare:', err.message);
//         return res.status(500).json({ message: err.message });
//     }
// };

module.exports.getFare = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { pickup, destination, apiKey } = req.query;

    try {
        const fare = await rideService.getFare(pickup, destination, apiKey);
        return res.status(200).json(fare);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};



module.exports.confirmRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        console.error("Validation errors:", errors.array());
        return res.status(400).json({ errors: errors.array() });
    }

    const { rideId, apiKey } = req.body;
    console.log("Received rideId:", rideId);
    console.log("Received apiKey:", apiKey);

    try {
        const ride = await rideService.confirmRide({ rideId, captain: req.captain, apiKey });

        if (!ride) {
            return res.status(404).json({ message: 'Ride not found' });
        }

        sendMessageToSocketId(ride.user.socketId, { event: 'ride-confirmed', data: ride });

        return res.status(200).json({ ride });

    } catch (err) {
        console.error('Error in confirmRide:', err.message);
        return res.status(500).json({ message: err.message });
    }
};

















