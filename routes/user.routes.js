const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

router.route('/signup').post(userController.apiSignUp);
router.route('/getAttendance').get(userController.apiGetAttendance);
router.route('/getNBposts').get(userController.apiGetNBPosts);

module.exports = router;