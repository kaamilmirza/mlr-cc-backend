const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

router.route('/signup').post(userController.apiSignUp);
router.route('/getUser').post(userController.apiGetUser)
router.route('/getAttendance').get(userController.apiGetAttendance);
router.route('/getNBposts').get(userController.apiGetNBPosts);
router.route('/getppost').get(userController.apiGetPosts);

module.exports = router;