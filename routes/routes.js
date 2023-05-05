const express = require('express');
const router = express.Router();

router.use('/api/', require('./user.routes'));
router.use('/api/', require('./admin.routes'));
router.use('/test', function(req, res){
    res.status(200).json({
        status: 'success',
        message: 'test'
    });
});
module.exports = router;
