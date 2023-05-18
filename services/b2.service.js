const dotenv = require("dotenv");
dotenv.config();

//b2 backblaze authorize account 
const BackBlaze = require('./b2_blaze.service')

module.exports = class BackBlazeService {
    static async uploadFile(req, res, next) {
    //b2 backblaze upload file
    const fs = require("fs");
    const bucketId = process.env.B2_BUCKET_ID;
    const bucketName = process.env.B2_BUCKET_NAME;
    // const filePath = "./test.js";
    // const fileName = "test.js";
    const contentType = "text/javascript";
    
    const filePath = req.body.filePath;
    const fileName = req.body.fileName;

    const b2 = new BackBlaze(bucketId, bucketName);
    b2.uploadFile({ fileName: fileName, filePath: filePath})
    .then(console.log).catch(console.error);
    }
}





