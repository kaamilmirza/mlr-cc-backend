const allServices = require('../services/allServices.js');

module.exports = class postController {
    static async apiCreatePost(req, res, next) {
        try {
            const post = await allServices.apiCreatePost(req.body);
            res.status(201).json({
                status: 'success',
                data: post,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }

    static async apiCreateNBPost(req, res, next) {
        try {
            const post = await allServices.apiCreateNBPost(req.body);
            res.status(201).json({
                status: 'success',
                data: post,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
}