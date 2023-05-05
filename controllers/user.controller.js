const UserService = require('../services/user.service');
const allServices = require('../services/all.services');
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

    static async apiUserUpdate(req, res, next){
        try{
            const user = await UserService.apiUserUpdate(req.body);
            res.status(201).json({
                status: 'success',
                data: user,
            });
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }

    }

    static async apiUserDelete(req, res, next){
        try{
            const user = await UserService.apiUserDelete(req.body);
            res.status(201).json({
                status: 'success',
                data: user,
            });
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }

    static async apiAttendance(req, res, next) {
        try{
            const attendance = await UserService.apiAttendance(req.body);
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


    static async apiGetUser(req, res, next){
        try{
            const user = await UserService.apiGetUser(req.body);
            res.status(201).json({
                status: 'success',
                data: user,
            });
        }
        catch(error){
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

    static async apiUpdateAttendance(req, res, next) {
        try{
            const attendance = await UserService.apiUpdateAttendance(req.body);
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

    static async apiGetPosts(req, res, next) {
        try{
            const posts = await allServices.apiGetPost(req.body);
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

    static async apiTimetable(req, res, next) {
        try{
            const timetable = await allServices.apiCreateTimetable(req);
            res.status(201).json({
                status: 'success',
                data: timetable,
            });
        }catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }

    static async apiGetTimetable(req, res, next) {
        try{
            const timetable = await allServices.apiGetTimetable(req);
            res.status(201).json({
                status: 'success',
                data: timetable,
            });
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }

    static async apiTimetableUpdate(req, res, next) {
        try{
            const timetable = await allServices.apiTimetableUpdate(req);
            res.status(201).json({
                status: 'success',
                data: timetable,
            });
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
    
    static async apiUploadImage(req, res, next) {
        try{
            const image = await backBlazeService.uploadFile(req);
            res.status(201).json({
                status: 'success',
                data: image,
            });
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message,
            });
        }
    }
}
    