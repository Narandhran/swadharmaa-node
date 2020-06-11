var path = require('path');
var multer = require('multer');
const config = require('../../config')[process.env.NODE_ENV];

const fileStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        switch (file.fieldname) {
            case 'dp':
                cb(null, `${config.POST_RESOURCE_BASE_PATH}dp`);
                break;
            case 'content':
                cb(null, `${config.POST_RESOURCE_BASE_PATH}content`);
                break;
            case 'category':
                cb(null, `${config.POST_RESOURCE_BASE_PATH}category`);
                break;
            case 'pdf-thumb':
                cb(null, `${config.POST_RESOURCE_BASE_PATH}content/pdf-thumb`);
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

var loadMulter = (fileSize) => {
    return multer({
        storage: fileStorage,
        fileFilter: function (req, file, cb) {
            if (file.fieldname == 'content') {
                if (file.mimetype === 'application/pdf') {
                    cb(null, true);
                } else cb('Unsupported file type', false);
            } else if (file.fieldname == 'category' || file.fieldname == 'dp' || file.fieldname == 'pdf-thumb') {
                if (file.mimetype === 'image/png' ||
                    file.mimetype === 'image/jpg' ||
                    file.mimetype === 'image/jpeg') {
                    cb(null, true);
                } else cb('Unsupported file type', false);
            }
            else cb(new Error('Unsupported file type', false));

        },
        limits: { fileSize: (fileSize * 1024 * 1024) }
    });
};

module.exports = { loadMulter };