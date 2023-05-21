const UserService = require('../services/user.service');
const allServices = require('../services/all.services');
const backBlazeService = require('../services/b2.service');

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
            const attendance = await UserService.apiAttendance(req);
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
    
    static async apiFileUpload(req, res, next) {
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

    static async apiGetQuestions(req, res, next){
        try{
            const question = await allServices.apiGetQuestions(req);
            res.status(201).json({
                status: 'success',
                data: question,
            })
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    static async apiCreateQuestions(req, res, next){
        try{
            const question = await allServices.apiCreateQuestion(req);
            res.status(201).json({
                status: 'success',
                data: question,
            })
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message
            });
        }
    }

    static async apiPostReply(req, res, next){
        try{
            const reply = await allServices.apiPostReply(req);
            res.status(201).json({
                status: 'success',
                data: reply
            });
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message
            }
            )
        }
    }

    static async apiPostExplore(req, res, next){
        try{
            const explore = await allServices.apiPostExplore(req);
            res.status(201).json({
                status: 'success',
                data: explore
            });
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message
            }
            )
        }
    }

    static async apiGetExplore(req, res, next){
        try{
            const explore = await allServices.apiGetExplore();
            res.status(201).json({
                status: 'success',
                data: explore
            });
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message
            }
            )
        }
    }

    static async apigetUsers(req, res, next){
        try{
            const users = await allServices.apiGetUsers();
            res.status(201).json({
                status: 'success',
                data: users
            });
        }
        catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message
            }
            )
        }
    }

    static async apiGetStudents(req, res, next){
        try{
            const students = await allServices.apiGetStudents();
            res.status(201).json({
                status: 'success',
                data: students
            });
        }catch(error){
            res.status(500).json({
                status: 'error',
                message: error.message
            })
        }
    }

}
    