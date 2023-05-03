const express = require('express');
const router = express.Router();

router.use('/api/', require('./user.routes'));

module.exports = router;
