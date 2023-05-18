const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const verifyToken = require('../middlewares/verifyToken');
const upload = require('../middlewares/upload');
const cpost = require('../controllers/cpost.controller');
const userController = require('../controllers/user.controller');

//placement post create
router.route('/ppost').post(upload.single('image'), postController.apiCreatePost);

//attendance
router.route('/attendance').post(userController.apiAttendance);
router.route('/updateAttendance').post(userController.apiUpdateAttendance);

//notice board post create
router.route('/nbpost').post(postController.apiCreateNBPost);
router.route('/deleteNBpost').post(postController.apiDeleteNBPost);

//get last 5 posts

//club
router.route('/cpost').post(upload.single('image'), cpost.apiCreateCPost);
router.route('/updatecpost').post(upload.single('image'), cpost.apiUpdateCPost);
router.route('/deletecpost').post(cpost.apiDeleteCPost);
router.route('/getclub').get(cpost.apiGetCPost);

//get user
router.route('/getUser').get(userController.apiGetUser)
router.route('/getStudents').get(userController.apiGetStudents);

//timetable 
router.route('/timetable').post(upload.single('image'), userController.apiTimetable);

router.route('/uploadtest').post(upload.single('file'), userController.apiFileUpload);

module.exports = router;