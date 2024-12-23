const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const captainSchema = new mongoose.Schema({
    fullname:{
        firstname:{
            type: String,
            required: true,
            minLength:[3,'first name must be at least 3 characters long']
        },

        lastname:{
            type: String,
            minLength:[3,'last name must be at least 3 characters long']
        }
    },

    email:{
        type: String,
        unique: true,
        required: true,
        match:[/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
    },

    password :{
        type: String,
        required: true,
        minLength:[6,'password must be at least 6 characters long']
    },

    socketId:{
        type: String
    },

    //available or not to take rides
    status:{
        type:String,
        enum:['active','inactive'],
        default:'inactive',
    },

    vehicle:{
        color:{
            type:String,
            required:true,
            minLength:[3,'vehicle color must be at least 3 characters long']
        },
        plate:{
            type: String,
            required: true,
            minLength:[3,'vehicle plate must be at least 3 characters long']   
        },
        capacity:{
            type: Number,
            required: true,
            min:[1,'vehicle capacity must be at least 1']
        },
        vehicleType:{
            type:String,
            enum:['car','motorcycle','auto'],
            required:true,
        }
    },

    location:{
        lat:{
            type: Number,
            
        },
        lng:{
            type: Number,
            
        }, 
    }
})

captainSchema.methods.generateAuthToken = function(){
    const token = jwt.sign({_id: this._id}, process.env.JWT_SECRET, {expiresIn: '24h'});
    this.socketId = token;
    return token;
}

captainSchema.methods.comparePassword = async function(password){
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password){
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('captain', captainSchema);

module.exports = captainModel;