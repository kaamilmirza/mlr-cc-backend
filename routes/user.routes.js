const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

//user crud
router.route('/signup').post(userController.apiSignUp);
router.route('/updateUser').post(userController.apiUserUpdate);
router.route('/deleteUser').post(userController.apiUserDelete);


//user 
router.route('/getAttendance').get(userController.apiGetAttendance);
router.route('/getNBposts').get(userController.apiGetNBPosts);
router.route('/getppost').get(userController.apiGetPosts);
router.route('/getTimetable').get(userController.apiGetTimetable);
router.route('/createQuestion').post(userController.apiCreateQuestions);
router.route('/getQuestions').get(userController.apiGetQuestions);
module.exports = router;