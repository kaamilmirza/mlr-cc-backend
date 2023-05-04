const express = require('express');
const router = express.Router();
const postController = require('../controllers/post.controller');
const verifyToken = require('../middlewares/verifyToken');

router.route('/ppost').post(postController.apiCreatePost);
router.route('/nbpost').post(postController.apiCreateNBPost);

module.exports = router;