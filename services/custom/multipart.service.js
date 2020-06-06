var path = require('path');
var multer = require('multer');
const config = require('../../config')[process.env.NODE_ENV];

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        switch (file.fieldname) {
            case 'dp':
                cb(null, `${config.POST_RESOURCE_BASE_PATH}dp`);
                break;
            case 'products':
                cb(null, `${config.POST_RESOURCE_BASE_PATH}product`);
                break;
            case 'category':
                cb(null, `${config.POST_RESOURCE_BASE_PATH}category`);
                break;
            default:
                cb(null, `${config.POST_RESOURCE_BASE_PATH}`);
                break;
        }
    },
    filename: (req, file, cb) => {
        cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

var loadMulter = (fileSize, fileExt) => {
    return multer({
        storage: fileStorage,
        fileFilter: function (req, file, cb) {
            if (file.size > (fileSize * 1024 * 1024)) {
                var e = new Error(`File size is should not exceet ${fileSize}Mb`);
                e.name = 'FileValidationError';
                return cb(e, false);
            }
            var ext = path.extname(file.originalname);
            if (!fileExt.some(v => {
                return v == ext;
            })) {
                return cb(new Error('Unsupported file type'));
            }
            cb(null, true);
        },
        limits: { fileSize: (fileSize * 1024 * 1024) }
    });
};

module.exports = { loadMulter };