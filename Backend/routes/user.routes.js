const express = require('express');
const router = express.Router();
const { body } = require('express-validator');
const userController = require('../controllers/user-controller');
const authMiddleware = require('../middlewares/auth.middleware');

// Define route for user registration with validation
router.post(
    '/register',
    [
        body('email').isEmail().withMessage('Invalid email'),
        body('fullname.firstname')
            .isLength({ min: 3 })
            .withMessage('First name should be at least 3 characters long'),
        body('password')
            .isLength({ min: 6 })
            .withMessage('Password must be at least 6 characters long'),
    ],
    userController.registerUser // Handle the request in userController
);  
router.post('/login', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
],
    userController.loginUser
)

router.get('/profile', authMiddleware.authUser, userController.getUserProfile)

 
 router.get('/logout', authMiddleware.authUser, userController.logoutUser)


module.exports = router;

 