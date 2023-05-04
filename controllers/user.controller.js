const UserService = require('../services/user.service');
const allServices = require('../services/allServices');

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

    static async apiGetAttendance(req, res, next) {
        try{
            const attendance = await UserService.apiGetAttendance(req.body);
            res.status(201).json({
                status: 'success',
                data: attendance,
            });
        }catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }

    static async apiGetNBPosts(req, res, next) {
        try{
            const posts = await allServices.apiGetNBPosts(req.body);
            res.status(201).json({
                status: 'success',
                data: posts,
            });
        }catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
}
    