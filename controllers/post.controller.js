const allServices = require('../services/all.services.js');

module.exports = class postController {
    static async apiCreatePost(req, res, next) {
        try {
            const post = await allServices.apiCreatePost(req);
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

    static async apiDeleteNBPost(req, res, next) {
        try{
            const post = await allServices.apiDeleteNBPost(req.body);
            res.status(201).json({
                status: 'success',
                data: post,
            });
        }catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
}