const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const userRoutes = require('./routes/user.route');

// Load .env file
dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Body parser middleware (to accept JSON data)
app.use(express.json());

// API Routes
app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 6000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

