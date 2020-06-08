const { Library } = require('../models/library');

module.exports = {
    create: async (request, cb) => {
        let upload = loadMulter(5, ['.jpg', '.png', '.jpeg']).single('library');
        await upload(request, null, (err) => {
            if (err)
                cb(err, {});
            else {
                let persisted = JSON.parse(request.body.textField);
                persisted.thumbnail = request.file.filename;
                Library.create(persisted, (err, result) => {
                    cb(err, result);
                });
            }
        });
    },
    getById: async (request, cb) => {
        Library
            .findById(request.params.id)
            .exec((err, result) => {
                cb(err, result);
            });
    },
    updateById:  async (request, cb) => {
        await Library
            .findByIdAndUpdate(request.params.id, request.body, { new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    },
    updateThumbnail: async (request, cb) => {
        let upload = loadMulter(5, ['.jpg', '.png', '.jpeg']).single('library');
        await upload(request, null, (err) => {
            if (err)
                cb(err, {});
            else {
                Library
                    .findByIdAndUpdate(request.params.id, {
                        thumbnail: request.file.filename
                    }, { new: true })
                    .exec((err, result) => {
                        cb(err, result);
                    });
            }
        });
    }
};