const mapService = require('../services/maps.service');
const { validationResult } = require('express-validator');
const apiKey = process.env.GOOGLE_MAPS_API_KEY

 
module.exports.getCoordinates = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { address, apiKey } = req.query;
    try {
        const coordinates = await mapService.getAddressCoordinate(address, apiKey);
        return res.status(200).json(coordinates);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Coordinates not found' });
    }
};


 
module.exports.getDistanceTime = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;
    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    try {
        const distanceTime = await mapService.getDistanceTime(origin, destination, apiKey);
        return res.status(200).json(distanceTime);
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: 'Unable to fetch distance and time' });
    }
};


module.exports.getAutoCompleteSuggestions = async (req, res, next) => {
    try {
        console.log("Query Params:", req.query);
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            console.error("Validation Errors:", errors.array());
            return res.status(400).json({ errors: errors.array() });
        }
        const { input, apiKey } = req.query;
        console.log("Input:", input, "API Key:", apiKey);
        const suggestions = await mapService.getAutoCompleteSuggestions(input, apiKey);
        res.json({ suggestions });
    } catch (err) {
        console.error("Error fetching suggestions:", err.message);
        res.status(500).json({ message: "Unable to fetch suggestions" });
    }
};



