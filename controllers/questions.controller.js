const allServices = require('../services/all.services');
module.exports = class UserController {
    static async apiCreateQuestion(req, res, next) {
        try {
            const question = await allServices.apiCreateQuestion(req.body);
            res.status(201).json({
                status: 'success',
                data: question,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
}