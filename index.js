const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.route');

// Load .env file
dotenv.config();

// Connect to the database 
connectDB();

const app = express();

// Body parser middleware ( accept JSON data)
app.use(express.json());
app.use(cors())

// API Routes
app.use('/api/users', userRoutes);


//http://localhost:6000/api/users/create

const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});






