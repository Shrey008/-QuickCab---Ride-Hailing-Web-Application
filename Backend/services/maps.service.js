const axios = require('axios');
const apiKey = process.env.GOOGLE_MAPS_API_KEY;
const captainModel = require('../models/captain.model');

// module.exports.getAddressCoordinate = async (address) => {
//     if (!address) {
//         throw new Error('Address is required');
//     }

//     if (!apiKey) {
//         throw new Error('API key is required');
//     }

//     const url = `https://maps.gomaps.pro/maps/api/geocode/json?key=${apiKey}&address=${encodeURIComponent(address)}`;

//     try {
//         const response = await axios.get(url, { timeout: 30000 }); // Timeout set to 30 seconds
//         if (response.data.status === 'OK') {
//             const location = response.data.results[0].geometry.location;
//             return { lat: location.lat, lng: location.lng };
//         } else {
//             throw new Error(`Error from API: ${response.data.status} - ${response.data.error_message}`);
//         }
//     } catch (error) {
//         console.error('Error fetching coordinates:', error.message);
//         if (error.code === 'ETIMEDOUT') {
//             throw new Error('Request timed out. Please try again later.');
//         }
//         throw new Error('Failed to fetch coordinates.');
//     }
// };



module.exports.getAddressCoordinate = async (address, apiKey) => {
    if (!address) {
        throw new Error('Address is required');
    }

    if (!apiKey) {
        throw new Error('API key is required');
    }

    const url = `https://maps.gomaps.pro/maps/api/geocode/json?key=${apiKey}&address=${encodeURIComponent(address)}`;

    try {
        const response = await axios.get(url, { timeout: 30000 }); // Timeout set to 30 seconds
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return { lat: location.lat, lng: location.lng };
        } else {
            throw new Error(`Error from API: ${response.data.status} - ${response.data.error_message}`);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error.message);
        if (error.code === 'ETIMEDOUT') {
            throw new Error('Request timed out. Please try again later.');
        }
        throw new Error('Failed to fetch coordinates.');
    }
};

module.exports.getDistanceTime = async (origin, destination, apiKey) => {
    if (!origin || !destination) {
        throw new Error('Origin and destination addresses are required');
    }

    if (!apiKey) {
        throw new Error('API key is required');
    }

    const url = `https://maps.gomaps.pro/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url, { timeout: 10000 }); // Timeout set to 10 seconds
        console.log('API Response:', response.data); // Log the response for debugging

        if (response.data.status === 'OK') {
            const element = response.data.rows[0]?.elements[0];
            if (!element || element.status !== 'OK') {
                console.error('No valid routes found:', response.data);
                throw new Error('No valid routes found');
            }

            const distanceInKm = (element.distance.value / 1000).toFixed(2); // Convert meters to kilometers
            const durationInSeconds = element.duration.value; // Duration in seconds
            const durationInMinutes = Math.floor(durationInSeconds / 60); // Convert seconds to minutes
            const durationInHours = Math.floor(durationInMinutes / 60); // Convert minutes to hours
            const remainingMinutes = durationInMinutes % 60; // Remaining minutes after converting to hours

            return {
                distance: `${distanceInKm} km`,
                distanceValue: element.distance.value, // Distance in meters
                duration: `${durationInHours} hours ${remainingMinutes} minutes`,
                durationValue: durationInSeconds, // Duration in seconds
            };
        } else {
            console.error('Error: Unable to fetch directions, status:', response.data.status, 'error_message:', response.data.error_message);
            throw new Error(`Unable to fetch directions, status: ${response.data.status}`);
        }
    } catch (error) {
        if (error.response) {
            console.error('Error fetching directions:', error.response.status, error.response.statusText);
            console.error('Error response data:', error.response.data);
        } else if (error.code === 'ETIMEDOUT') {
            console.error('Error fetching directions: Request timed out');
        } else {
            console.error('Error fetching directions:', error.message);
        }
        throw error;
    }
};


module.exports.getAutoCompleteSuggestions = async (input, apiKey) => {
    if (!input) {
        throw new Error('Input is required');
    }
    if (!apiKey) {
        throw new Error('API key is required');
    }

    const url = `https://maps.gomaps.pro/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`; 

    try{
        const response = await axios.get(url, { timeout: 30000 }); // Timeout set to 30 seconds
        if (response.data.status === 'OK') {
            return response.data.predictions;
        } else {
            throw new Error(`unable to get suggestions`);
        }
    }
        catch(err){
            console.error(err);
            throw err;
        }
    }


    module.exports.getCaptainsInTheRadius = async (lat, lng, radius) => {

        // radius in km
    
    
        const captains = await captainModel.find({
            location: {
                $geoWithin: {
                    $centerSphere: [ [ lat, lng ], radius / 6371 ]
                }
            }
        });
    
        return captains;
    
    
    }     