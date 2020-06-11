const { Library } = require('../models/library');
const { loadMulter } = require('../services/custom/multipart.service');

module.exports = {
    create: async (request, cb) => {
        let upload = loadMulter(20).any();
        await upload(request, null, async (err) => {
            if (err)
                cb(err, {});
            else {
                let persisted = JSON.parse(request.body.textField);
                persisted.thumbnail = request.files[0].filename;
                persisted.content = request.files[1].filename;
                await Library.create(persisted, (err, result) => {
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
    updateById: async (request, cb) => {
        await Library
            .findByIdAndUpdate(request.params.id, request.body, { new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    },
    updateThumbnail: async (request, cb) => {
        let upload = loadMulter(5).single('pdf-thumb');
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
    },
    getRecent: async (request, cb) => {
        Library.find({})
            .sort({ createdAt: -1 })
            .limit(10)
            .exec((err, result) => {
                cb(err, result);
            });
    },
    listByCategory: async (request, cb) => {
        Library
            .find({ 'categoryId': request.params.id })
            .sort({ 'updatedAt': -1 })
            .exec((err, result) => {
                cb(err, result);
            });
    }
};