const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const verifyToken = require('../middlewares/verifyToken');
const upload = require('../middlewares/upload');
const cpost = require('../controllers/cpost.controller');

router.route('/ppost').post(upload.single('image'), postController.apiCreatePost);
router.route('/nbpost').post(postController.apiCreateNBPost);
router.route('/getclub').get(cpost.apiGetCPost);
router.route('/cpost').post(upload.single('image'), cpost.apiCreateCPost);
router.route('/updatecpost').post(upload.single('image'), cpost.apiUpdateCPost);
router.route('/deletecpost').post(cpost.apiDeleteCPost);



module.exports = router;