const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const verifyToken = require('../middlewares/verifyToken');

router.route('/signup').post(verifyToken, userController.apiSignUp);

module.exports = router;