//const User = require('../models/user.model');
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");



// Create a new user -> POST /api/users
const createUser = async (req, res) => {

    const { name, email, age, gender, password } = req.body;


    try {

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: 'user with this email already exisates' })
        }
        //// Store hash in your password DB
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = await User.create({
            name,
            email,
            password:hashPassword,
            age,
            gender
        });

        // email test

        try {
            const subject = "Wellcome to our App";
            const textBody = `Hello ${name} \n\nWellcome! Your account hasbeen created successfully. \n\n thanks \n\n the team`;
            const htmlBody =`
            <h1>Hello ${name}</h1>
            <P>Wellcome ! Your account hasbeen created successfully.</P>
            <br>
            <P>Thanks</p>
            <P>The Team</p>
            
            `

            
        } catch (error) {
            
        }

        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// Get all users -> GET /api/users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find({});
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error: error.message });
    }
};

// Get a single user by ID -> GET /api/users/:id
const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user', error: error.message });
    }
};

// Update a user -> PUT /api/users/:id
const updateUser = async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error updating user', error: error.message });
    }
};

// Delete a user -> DELETE /api/users/:id
const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.status(200).json({ message: 'User deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting user', error: error.message });
    }
};

module.exports = { createUser, getAllUsers, getUserById, updateUser, deleteUser };


