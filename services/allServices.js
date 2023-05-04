const ppost = require('../models/p_post.model.js');
const nboard = require('../models/n_board.model.js');
const mongoService = require('../services/mongo.service');

const multer = require('multer');
const upload = multer({dest: 'uploads/'});

module.exports = class allServices{
    static async apiCreatePost(body){
        try{
            const {title, uid, text, link} = body;
            const post = await ppost.create({title, ppost, uid, text, link});
            return post;
        }catch(error){
            throw error;
        }
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
