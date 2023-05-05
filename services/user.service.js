const User = require('../models/user.model');
const mongoService = require('../services/mongo.service');

module.exports = class UserService {
    static async apiSignUp(body) {
        try {
            const { name, email, uid, branch,
                    semester, year, phone, rno, section
            } = body;
            const user = await User.create({ 
                rno, section,
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

    static async apiUserUpdate(body){
        try{
            const {uid, name, email, branch,
                semester, year, phone, rno, section} = body;
            const user = await User.findOneAndUpdate({uid: uid}, {
                rno, section,
                name, email, uid, branch,
                semester, year, phone
            });
            return user;
        }catch(error){
            console.log(error);
        }
    }

    static async apiUserDelete(body){
        try{
            const {uid} = body;
            const user = await User.findOneAndDelete({uid: uid});
            return user;
        }catch(error){
            console.log(error);
        }
    }
    
    static async apiGetUser(body){
        try{
            const {uid} = body;
            const user = await User.findOne({uid: uid});
            return user;
        }catch(error){
            console.log(error);
        }
    }

}