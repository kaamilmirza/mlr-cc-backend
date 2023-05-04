const User = require('../models/user.model');
const mongoService = require('../services/mongo.service');

module.exports = class UserService {
    static async apiSignUp(body) {
        try {
            const { name, email, uid, branch,
                    semester, year, phone
            } = body;
            const user = await User.create({
                name, email, uid, branch,
                semester, year, phone});
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async apiGetAttendance(body) {
        try{
            const {rno} = body;
            const attendance = mongoService.collection('attendance').findOne({rno: rno});
            console.log(attendance);
            return attendance;
        }catch(error){
            console.log(error);
        }
    }

}