const express = require('express');
const router = express.Router();

router.use('/api/', require('./user.routes'));
router.use('/api/', require('./admin.routes'));

module.exports = router;
