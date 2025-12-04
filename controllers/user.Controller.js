//const User = require('../models/user.model');
const bcrypt = require("bcryptjs");
const User = require("../models/User.model");
const sendEmail = require("../service/SendEmail");



// Create a new user -> POST /api/users
const createUser = async (req, res) => {
    console.log(req.body);
    console.log(req.file);

    const { name, email, age, gender, password } = req.body;

    // email
    try {

        const userExist = await User.findOne({ email });

        if (userExist) {
            return res.status(400).json({ message: 'user with this email already exisates' })
        }
        //// Store hash in your password DB
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        // image 
        const imageUrl = req.file ? req.file.path : 'undifined';


        const newUser = await User.create({
            name,
            email,
            password: hashPassword,
            age,
            gender,
            profileImage: imageUrl,
        });




        // email test

        try {
            const subject = "Wellcome to our App";
            const textBody = `Hello ${name} \n\nWelcome to our platform! ! Your account has been created successfully and you can now log in to start using our services..\n\nIf you need any support, feel free to reach out to us. \n\n thank You \n\n The Team`;
            const htmlBody = `
            <h1>Welcome, ${name}</h1>
            <P style="font-size:16px; color:#333;">
            We’re happy to let you know that your account has been created successfully.
            </P>
            <p>
                    You can now log in and start exploring our services. If you require any assistance, feel free to contact our support team anytime.
                </p>

            <br>
            <P>Thanks</p>
            <P>The Team</p>
            
            `

            sendEmail(newUser.email, subject, textBody, htmlBody)


        } catch (Emailerror) {
            console.error('Email sending after user creations:', Emailerror.message)

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


// Delete a user -> DELETE /api/users/:id

const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if(user){
            return res.status(404).json({message:'user not found'})
        }
        // return
       res.status(200).json({message:'User deleted successfully'})
        
       
    } catch (error) {
        res.status(500).json({message:'Error deleting User',error:error.message})

    }

}


module.exports = { createUser, getAllUsers,deleteUser };


