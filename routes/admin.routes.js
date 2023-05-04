const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const verifyToken = require('../middlewares/verifyToken');
const upload = require('../middlewares/upload');

router.route('/ppost').post(upload.single('image'), postController.apiCreatePost);
router.route('/nbpost').post(postController.apiCreateNBPost);

module.exports = router;