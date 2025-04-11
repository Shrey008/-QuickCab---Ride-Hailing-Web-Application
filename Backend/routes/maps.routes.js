const express = require('express');
const router = express.Router();
const authMiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/map-controller');
const { query } = require('express-validator');

 

router.get('/get-coordinates',
    query('address').isString().isLength({ min: 3 }).withMessage('Invalid address'),
    query('apiKey').isString().isLength({ min: 3 }).withMessage('Invalid API key'),
    authMiddleware.authUser,
    mapController.getCoordinates
);

router.get('/get-distance-time',
    query('origin').isString().isLength({ min: 3 }).withMessage('Origin must be a valid string.'),
    query('destination').isString().isLength({ min: 3 }).withMessage('Destination must be a valid string.'),
    query('apiKey').isString().isLength({ min: 1 }).withMessage('API key is required.'),
    authMiddleware.authUser,
    (req, res, next) => {
        console.log('Request Query:', req.query);
        next();
    },
    mapController.getDistanceTime
);


router.get('/get-suggestions',
    query('input').isString().isLength({ min: 3 }),
    query('apiKey').isString().isLength({ min: 3 }),
     
    mapController.getAutoCompleteSuggestions
)

module.exports = router