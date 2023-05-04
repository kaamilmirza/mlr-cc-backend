const ppost = require('../models/p_post.model.js');
const nboard = require('../models/n_board.model.js');
const mongoService = require('../services/mongo.service');
const {firebase, firebaseauth, firebaseAdmin} = require('../services/firebase.service');



module.exports = class allServices{

    static async apiCreatePost(req){
        const fileExt = req.file;
        const fileName = req.file.originalname.split('.').pop();
        const fileRef = bucket.file(fileName);
        const fileStream = fileRef.createWriteStream({
            metadata: {
                contentType: fileExt.mimetype
            },
        });
        fileStream.on('error', (err) => {
            console.log(err);
        });
        fileStream.on('finish', async () => {
            const url = `gs://${bucket.name}/${fileRef.name}`;
            

        try{
            const {title, uid, text, link} = req.body;
            const post = await ppost.create({title, ppost, uid, text, link});
            return post;
        }catch(error){
            throw error;
        }
        });
    fileStream.end(req.file.buffer);
}

    static async apiCreateNBPost(body){
        try{
            const {title, description, hastag, link} = body;
            const post = await nboard.create({title, description, hastag, link});
            return post;
        }catch(error){
            throw error;
        }
    }

    static async apiGetNBPosts(){
        try{
            const posts = mongoService.collection('nboards').find().toArray();
            return posts;
        }catch(error){
            throw error;
        }
    }  
}
