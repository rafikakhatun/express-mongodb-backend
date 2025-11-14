const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, 'Please add a name'],
            trim: true,
        },
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
            trim: true,
            lowercase: true,
        },
        age: {
            type: Number,
            required: false,
        },

        gender: {
            type: String,
            required: false,
            required: [true, 'please add an email'],
            enum: ['male', 'female', 'other'],
            trim: true,
        },

        password: {
            type: String,
            required: false,
            required: [true, 'please add your password'],
            minlenght: [6, 'password must be 6 character']


        },
    },



    {
        timestamps: true,
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

