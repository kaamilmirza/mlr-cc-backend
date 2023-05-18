const {firebase, firebaseAdmin, firebaseauth} = require('../services/firebase.service');

async function verifyToken(req,res,next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if(token == null) return res.status(401).json({error: 'Unauthorized'});
    try {
        const decodedToken = await firebaseAdmin.auth().verifyIdToken(token);
        req.uid = decodedToken.uid;
        next();
    } catch (error) {
        return res.status(401).json({error: 'Unauthorized'});
    }
}

module.exports = verifyToken;

