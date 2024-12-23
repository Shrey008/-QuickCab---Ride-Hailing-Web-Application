const userModel = require('../models/usermodel');

module.exports.createUser = async ({
    firstname,
    lastname,
    email,
    password,
}) => {
    // Check if required fields are provided
    if (!firstname || !email || !password) {
        throw new Error('All fields are required');
    }

    // Create a new user in the database
    const user = await userModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
    });

    return user;
};
