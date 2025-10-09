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
    },
    {
        timestamps: true, 
    }
);

const User = mongoose.model('User', userSchema);

module.exports = User;

