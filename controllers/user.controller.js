const UserService = require('../services/user.service');

module.exports = class UserController {

    static async apiSignUp(req, res, next) {
        try {
            const user = await UserService.apiSignUp(req.body);
            res.status(201).json({
                status: 'success',
                data: user,
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }


}
    