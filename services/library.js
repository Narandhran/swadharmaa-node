const { Library } = require('../models/library');
const { loadMulter } = require('../services/custom/multers3.service');

module.exports = {
    create: async (request, cb) => {
        let upload = loadMulter(20,'book').any();
        await upload(request, null, async (err) => {
            if (err)
                cb(err, {});
            else {
                let persisted = JSON.parse(request.body.textField);
                persisted.thumbnail = request.files[0].key;
                persisted.content = request.files[1].key;
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
        let upload = loadMulter(5,'pdf-thumb').single('pdf-thumb');
        await upload(request, null, (err) => {
            if (err)
                cb(err, {});
            else {
                Library
                    .findByIdAndUpdate(request.params.id, {
                        thumbnail: request.file.key
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
    },
    genreBasedList: async (request, cb) => {
        Library
            .aggregate([
                {
                    '$unwind': { 'path': '$genre' }
                }, {
                    '$sort': { 'genre': 1, 'name': 1 }
                }, {
                    '$group': {
                        '_id': '$genre',
                        'items': {
                            '$push': {
                                'name': '$name',
                                'genre': '$genre',
                                'author': '$author',
                                'yearOfPublish': '$yearOfPublish',
                                'description': '$description',
                                'thumbnail': '$thumbnail',
                                'content': '$content'
                            }
                        }
                    }
                }, {
                    '$project': {
                        '_id': 0,
                        'genre': '$_id',
                        'books': { '$slice': ['$items', 10] }
                    }
                }
            ]).exec((err, result) => {
                cb(err, result);
            });
    }
};