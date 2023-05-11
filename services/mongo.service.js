//mongodb and mongoose connection configuration 
const mongoose = require('mongoose');
const config = require('../config/config');
const dotenv = require('dotenv');
dotenv.config();

// console.log(config.mongoURI);
mongoose.connect(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true, 
autoIndex: false, 
poolSize: <PoolSize>, 
connectTimeoutMS: <Timeout>, 
socketTimeoutMS: <Timeout>, 
family: 4, 
serverSelectionTimeoutMS: <Timeout>, 
heartbeatFrequencyMS: 1500, });
const connection = mongoose.connection;

connection.once('open', () => {
    console.log('MongoDB database connection established successfully');
});

module.exports = connection;

