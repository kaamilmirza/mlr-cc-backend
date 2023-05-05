// const B2 = require('backblaze-b2');
// const fs = require('fs');
// const dotenv = require('dotenv');
// dotenv.config();
// const config = require("../config/config");

// // module.exports = class backBlazeService{
// //     static async uploadFile(req){
// //         const {applicationKeyId, applicationKey, bucketId} = config.blackBlaze;
// //         const {fileName, filePath} = req;
// //         const b2 = new B2({
// //             applicationKeyId,
// //             applicationKey
// //         });
// //         await b2.authorize();
// //         console.log(b2);

// //         const uploadUrl = await b2.getUploadUrl(bucketId);
// //         const file = fs.readFileSync(filePath);
// //         const fileInfo = await b2.uploadFile({
// //             uploadUrl: uploadUrl.data.uploadUrl,
// //             uploadAuthToken: uploadUrl.data.authorizationToken,
// //             fileName: fileName,
// //             data: file
// //         });
// //         return fileInfo;
// //     }

// //     static async deleteFile(fileName){
// //         const b2 = new b2({
// //             applicationKeyId,
// //             applicationKey
// //         });
// //         await b2.authorize();
// //         const file = await b2.deleteFileVersion({
// //             fileName: fileName,
// //             fileId: fileName
// //         });
// //         return file;
// //     }
// // }