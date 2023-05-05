const ppost = require('../models/p_post.model.js');
const nboard = require('../models/n_board.model.js');
const mongoService = require('../services/mongo.service');
const fs = require('fs');
const {firebase, firebaseauth, firebaseAdmin} = require('../services/firebase.service');

module.exports = class allServices{

    static async apiCreatePost(req){
        const bucket = firebaseAdmin.storage().bucket();
        const fileExt = req.file;
        const fileName = `${Date.now()}.${fileExt.originalname.split('.').pop()}`;
        const fileRef = bucket.file(fileName);
        const url = bucket.upload(req.file.path, {
            destination: `posts/${fileName}`,
            metadata: {
                contentType: fileExt.mimetype
            },
        }).then((data) => {
            fs.unlinkSync(req.file.path);
            return data[0].getSignedUrl({
                action: 'read',
                expires: '03-09-2491'
            });
        });
        
        const {title, uid, text, link  } = req.body;
        const imageURL = (await url).toString();
        const post = await ppost.create({title, uid, text, imageURL});
        return post;
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
