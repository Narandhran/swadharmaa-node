var aws = require('aws-sdk');
var multer = require('multer');
var multerS3 = require('multer-s3');
var path = require('path');


aws.config.update({
    secretAccessKey: 'B6WkfMYrwd/LsmfVONgCv2RC9iZ9QoOkB6Bi5aMM',
    accessKeyId: 'AKIAJGAWQOQDGV5W76TQ',
    region: 'ap-south-1'
});

var s3 = new aws.S3();

var loadMulter = (fileSize, filePath) => {
    return multer({
        storage: multerS3({
            s3: s3,
            bucket: `swadharmaa/${filePath}`,
            key: function (req, file, cb) {
                cb(null, `${Date.now()}${path.extname(file.originalname)}`);
            }
        }),
        fileFilter: function (req, file, cb) {
            if (file.fieldname == 'content') {
                if (file.mimetype === 'application/pdf') {
                    cb(null, true);
                } else cb('Unsupported file type', false);
            } else if (file.fieldname == 'category' || file.fieldname == 'dp' || file.fieldname == 'pdf-thumb') {
                let fext = path.extname(file.originalname);
                if (fext == '.jpg' || fext == '.jpeg' || fext == '.png') {
                    cb(null, true);
                } else cb(new Error('Unsupported file type'), false);
            }
            else cb(new Error('Unsupported file type', false));

        },
        limits: { fileSize: (fileSize * 1024 * 1024) }
    });
};

module.exports = { loadMulter };