const allServices = require('../services/all.services.js');

module.exports = class cpostController {
    static async apiCreateCPost(req, res, next) {
        try {
            const post = await allServices.apiCreateCPost(req);
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
    static async apiGetCPost(req, res, next) {
        try {
            const post = await allServices.apiGetCPost(req);
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
    static async apiUpdateCPost(req, res, next) {
        try {
            const post = await allServices.apiUpdateCPost(req);
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
    static async apiDeleteCPost(req, res, next) {
        try {
            const post = await allServices.apiDeleteCPost(req);
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