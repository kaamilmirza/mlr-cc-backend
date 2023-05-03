const express = require('express');
const port = process.env.PORT || 3000;

const routes = require('./routes/routes');
const firebaseService = require('./services/firebase.service');

const app = express();
app.use(express.json());

app.use(routes);

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running on port ${port}`);
    });
