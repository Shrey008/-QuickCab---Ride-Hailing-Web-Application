const express = require('express');
const router = express.Router();
const { body,query } = require('express-validator');
const rideController = require('../controllers/ride-controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create',
    authMiddleware.authUser,
    body('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
    body('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
    body('vehicleType').isString().isIn(['auto', 'car', 'moto']).withMessage('Invalid vehicle type'),
    body('apiKey').notEmpty().withMessage('API Key is required'),
    rideController.createRide
);

 router.get('/get-fare',
    authMiddleware.authUser,
     query('pickup').isString().isLength({ min: 3 }).withMessage('Invalid pickup address'),
     query('destination').isString().isLength({ min: 3 }).withMessage('Invalid destination address'),
     //query('vehicleType').isIn(['auto', 'car', 'moto']).withMessage('Invalid vehicle type'),
     query('apiKey').isString().notEmpty().withMessage('API Key is required'),
   
     authMiddleware.authUser,
     rideController.getFare 
 );


 router.post('/confirm',
    authMiddleware.authCaptain,
    body('rideId').isMongoId().withMessage('Invalid ride ID'),
    // body('otp').isString().isLength({ min: 6,max:6 }).withMessage('Invalid OTP'),
    body('apiKey').notEmpty().isString().withMessage('API Key is required'),
    rideController.confirmRide
 )




module.exports = router;