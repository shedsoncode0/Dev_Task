const express = require('express');
const cors = require('cors');
const colors = require('colors');
const connectDB = require('./server/database/connection');
const dotenv = require('dotenv').config();

// Server PORT
const PORT = process.env.PORT || 8000;

// Connect to Database
connectDB();

// The main Server
const app = express();

// Server Middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors());
app.use((req, res, next) => {
    console.log(req.path, req.method);
    next()
});

// Route Middlewares
app.use('/api/auth', require('./server/routes/authRoute'));
app.use('/api/user', require('./server/routes/userRoute'));

// Start the server
app.listen(PORT, () => {
    console.log("Server is up an Running on POST " + PORT.rainbow.underline);
});