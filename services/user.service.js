const User = require('../models/user.model');
module.exports = class UserService {
    static async apiSignUp(req, res, next) {
        try {
            const { name, email, uid, branch,
                    semester, year, phone
            } = req.body;
            const user = await User.create({
                name, email, uid, branch,
                semester, year, phone});
            res.status(201).json({
                status: 'success',
                data: user,
            });
        } catch (error) {
            next(error);
        }
    }
}