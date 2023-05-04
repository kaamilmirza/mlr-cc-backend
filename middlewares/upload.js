const multer = require('multer');
const upload = multer({ dest: 'uploads/' }, {limits: {fileSize: 1000000}});
module.exports = upload;
