// server.js

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

// Load environment variables from .env file
require('dotenv').config();

// Create Express app
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON bodies

// MongoDB Connection
const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});

// API Routes
const applicantsRouter = require('./routes/applicants');
app.use('/api/applicants', applicantsRouter); // All applicant routes will be under /api/applicants

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
