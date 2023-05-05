const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT;
const routes = require('./routes/routes');

const app = express();

app.use(express.json());

app.use(routes);

const mongoService = require('./services/mongo.service');
mongoService;


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
    });
