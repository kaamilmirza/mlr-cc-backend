const ppost = require('../models/p_post.model.js');
const cpost = require('../models/club.model.js');
const nboard = require('../models/n_board.model.js');
const mongoService = require('./mongo.service.js');
const fs = require('fs');
const {firebase, firebaseauth, firebaseAdmin} = require('./firebase.service.js');
const {ObjectId} = require('mongodb');
const { database } = require('firebase-admin');
const Question = require('../models/question.model.js');
const Explore = require('../models/explore.model.js');
const User = require('../models/user.model.js');
const {Student_data, Course} = require('../models/student.model');

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
        const post = await ppost.create({title, uid, text, link, imageURL}).learn();
        return post;
    }
    //api for getting placement posts
    static async apiGetPost(req){
        try{
            //get last 5 posts from pposts mongodb
            const posts = await mongoService.collection('pposts').find().lean().sort({createdAt:-1}).limit(5).toArray();
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
            const posts = await mongoService.collection('cposts').find().lean().toArray();
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
            const post = await cpost.updateOne({title, description, clubname, date, venue, link, imageURL}, {where: {title: req.body.title}}).lean();
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
            const posts = mongoService.collection('nboards').find(
            ).sort({createdAt: -1}).lean().toArray();
            return posts;
        }catch(error){
            throw error;
        }
    }  

    //creating timetable
    static async apiCreateTimetable(req){
        try{
            const {branch, year, section} = req.body;
            //upload timetable image to firebase storage and get the url
            const bucket = firebaseAdmin.storage().bucket();
            const fileExt = req.file;
            const fileName = `${Date.now()}.${fileExt.originalname.split('.').pop()}`;
            const fileRef = bucket.file(fileName);
            const url = bucket.upload(req.file.path, {
                destination: `timetable/${fileName}`,
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
            const timetableDoc = await mongoService.collection('timetable').insertOne({
                branch, year, imageURL, section
            });
            return timetableDoc;
        }catch(error){
            console.log(error);
        }
    }

    //finding timetable 
    static async apiGetTimetable(req){
        try{
            const {branch, year, section} = req.body;
            const timetable = await mongoService.collection('timetable').findOne({branch, year, section}).lean();
            return timetable;
        }catch(error){
            throw error;
        }
    }

    //deleting nbpost
    static async apiDeleteNBPost(body){
        try{
            const {title} = body;
            const post = await nboard.deleteOne({where: {title}});
            console.log(post);
            return post;
        }catch(error){
            throw error;
        }
    }

    static async apiCreateQuestion(req){
        try{
            const {question} = req.body;
            const id = new ObjectId();
            const comments = [];
            const post = await Question.create({question, id, comments});
            return post;
        }catch(error){
            throw error;
        }
    }
    
    static async apiGetQuestions(req){
        try{
            // const collection =  mongoService.collection("questions");
            //get recent 10 questions
            const question = await Question.find().lean().limit(10);
            return question;
        }catch(error){
            return error;
        }
    }

    static async apiPostReply(req){
        try{
            const {_id, text, username, imageUrl } = req.body;
            const reply = {text, username, imageUrl};
            //push reply to comments of question with id
            console.log(_id);
            const post = await Question.findByIdAndUpdate(_id, {$push: {comments: reply}}).lean();
            console.log(post);
            return post;
        }catch(error){
            throw error;
        }
    }

    static async apiPostExplore(req){
        try{
            const {name, photoUrl} = req.body;
            const bucket = firebaseAdmin.storage().bucket();
            const fileExt = req.file;
            const fileName = `${Date.now()}.${fileExt.originalname.split('.').pop()}`;
            const fileRef = bucket.file(fileName);
            const url = bucket.upload(req.file.path, {
                destination: `explore/${fileName}`,
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
            const imageLink = (await url).toString();
            const post = await Explore.create({name, photoUrl, imageLink});
            return post;
        }catch(error){
            throw error;
        }
    }

        static async apiGetExplore(){
            try{
                //get previous 10 posts latest
                const posts = await Explore.find().lean().limit(10);
                return posts;
            }catch(error){
                throw error;
            }
        }

        static async apiGetUsers(){
            try{
                const users = await User.find();
                return users;
            }catch(error){
                throw error;
            }
        }

        static async apiGetStudents(){
            try{
                const students = await Student_data.find().lean();
                return students;
            }catch(error){
                throw error;
            }
        }
    }





    // //upload image to firebase storage
    // static async apiUploadImage(req){
        
    // }





