const User = require('../models/user.model');
const atten = require('../models/attendance.model');
const mongoService = require('../services/mongo.service');

module.exports = class UserService {
    static async apiSignUp(body) {
        try {
            const { name, email, uid, branch,
                    semester, year, phone, rno, section, imageUrl
            } = body;
            const user = await User.create({ 
                rno, section,
                name, email, uid, branch,
                semester, year, phone, imageUrl});
            return user;
        } catch (error) {
            throw error;
        }
    }

    static async apiGetAttendance(body) {
        try{
            const {rno} = body;
            const attendance = mongoService.collection('attendances').findOne({rno: rno});
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

    static async apiAttendance(req){
        try{
            const {rno, attendance} = req.body;
            const attn = await atten.create({rno, attendance});
            return attn;
        }catch(error){
            console.log(error);
        }
    }

    static async apiUpdateAttendance(req){
        try{
            const {rno, attendance} = req.body;
            const attn = await atten.findOneAndUpdate({rno: rno}, {
                rno, section, date, attendance
            });
            return attn;
        }catch(error){
            throw error;
        }
    }

}