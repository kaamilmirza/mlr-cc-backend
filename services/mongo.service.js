//mongodb and mongoose connection configuration 
const mongoose = require('mongoose');
const config = require('../config/config');
const dotenv = require('dotenv');
dotenv.config();

// console.log(config.mongoURI);
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

module.exports = connection;

