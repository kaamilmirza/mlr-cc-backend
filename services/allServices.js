const ppost = require('../models/p_post.model.js');
const cpost = require('../models/club.model.js');
const nboard = require('../models/n_board.model.js');
const mongoService = require('../services/mongo.service');
const fs = require('fs');
const {firebase, firebaseauth, firebaseAdmin} = require('../services/firebase.service');

module.exports = class allServices{
//creating placement posts 
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
        const post = await ppost.create({title, uid, text, link, imageURL});
        return post;
    }
    //api for getting placement posts
    static async apiGetPost(req){
        try{
            //get last 5 posts from pposts mongodb
            const posts = await mongoService.collection('pposts').find().sort({createdAt:-1}).limit(5).toArray();
            console.log(posts);
            return posts;
        }catch(error){
            throw error;
        }
           
    }

    //creating club posts
    static async apiCreateCPost(req){
        const bucket = firebaseAdmin.storage().bucket();
        const fileExt = req.file;
        const fileName = `${Date.now()}.${fileExt.originalname.split('.').pop()}`;
        const fileRef = bucket.file(fileName);
        const url = bucket.upload(req.file.path, {
            destination: `clubposts/${fileName}`,
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
        const {title, description, clubname, date, venue, link, text} = req.body;
        const imageURL = (await url).toString();
        const post = await cpost.create({title, description, text, link, clubname, venue, date, imageURL});
        return post;
    }
    //getting club posts
    static async apiGetCPost(req){
        try{
            //get all collection from cposts mongodb
            const posts = await mongoService.collection('cposts').find().toArray();
            console.log(posts);
            return posts;
        }catch(error){
            throw error;
        }
    }
    //updating club posts 
    static async apiUpdateCPost(req){
        const bucket = firebaseAdmin.storage().bucket();
        const fileExt = req.file;
        const fileName = `${Date.now()}.${fileExt.originalname.split('.').pop()}`;
        const fileRef = bucket.file(fileName);
        const url = bucket.upload(req.file.path, {
            destination: `clubposts/${fileName}`,
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
        const imageURL = (await url).toString();
        try{
            const {title, description, clubname, date, venue, link} = req.body;
            const post = await cpost.updateOne({title, description, clubname, date, venue, link, imageURL}, {where: {title: req.body.title}});
            return post;
        }catch(error){
            throw error;
        }
    }

    //creating notice board posts
    static async apiCreateNBPost(body){
        try{
            const {title, description, hastag, link} = body;
            const post = await nboard.create({title, description, hastag, link});
            return post;
        }catch(error){
            throw error;
        }
    }



    //getting notice board posts
    static async apiGetNBPosts(){
        try{
            const posts = mongoService.collection('nboards').find().toArray();
            return posts;
        }catch(error){
            throw error;
        }
    }  
}
