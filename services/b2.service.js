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
    const authToken = process.env.B2_APPLICATION_KEY;
    const apiUrl = "https://s3.us-east-005.backblazeb2.com";
    // const filePath = "./test.js";
    // const fileName = "test.js";
    const contentType = "text/javascript";
    console.log("here");
    const filePath = req.file.path;
    const fileName = req.file.filename;

    const b2 = new BackBlaze(bucketId, apiUrl, bucketName, authToken);
    const uploaded = b2.uploadFile({ fileName: fileName, filePath: filePath})
    .then(console.log("success")).catch(console.error);

    }
}





