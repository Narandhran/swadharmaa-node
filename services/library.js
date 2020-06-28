const { Library } = require('../models/library');
const { loadMulter } = require('../services/custom/multers3.service');

module.exports = {
    create: async (request, cb) => {
        let upload = loadMulter(20, 'book').any();
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
    listAll: async (request, cb) => {
        Library.find({}, '_id name genre author yearOfPublish description thumbnail content createdAt updatedAt')
            .exec((err, result) => {
                cb(err, result);
            });
    },
    getById: async (request, cb) => {
        Library
            .findById(request.params.id, '_id name genre author yearOfPublish description thumbnail content createdAt updatedAt')
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
        let upload = loadMulter(5, 'book').single('pdf-thumb');
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
        Library.find({}, '_id name genre author yearOfPublish description thumbnail content createdAt updatedAt')
            .sort({ createdAt: -1 })
            .limit(10)
            .exec((err, result) => {
                cb(err, result);
            });
    },
    listByCategory: async (request, cb) => {
        Library
            .find({ 'categoryId': request.params.id }, '_id name genre author yearOfPublish description thumbnail content createdAt updatedAt')
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
                                '_id': '$_id',
                                'name': '$name',
                                'genre': '$genre',
                                'author': '$author',
                                'yearOfPublish': '$yearOfPublish',
                                'description': '$description',
                                'thumbnail': '$thumbnail',
                                'content': '$content',
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
    },
    searchFilter: async (request, cb) => {
        Library.aggregate([{
            '$unwind': {
                'path': '$keywords'
            }
        }, {
            '$project': {
                // 'categoryId': '$categoryId',
                'name': {
                    '$toLower': '$name'
                },
                'author': '$author',
                'yearOfPublish': '$yearOfPublish',
                'description': '$description',
                'thumbnail': '$thumbnail',
                'content': '$content',
                'genre': '$genre',
                'createdAt': '$createdAt',
                'updatedAt': '$updatedAt'
            }
        }, {
            '$match': {
                '$or': [
                    {
                        'name': new RegExp(request.params.search + '.*')
                    }, {
                        'keywords': new RegExp(request.params.search + '.*')
                    }
                ]
            }
        }, {
            '$group': {
                '_id': '$categoryId',
                'data': {
                    '$push': {
                        '_id': '$_id',
                        'categoryId': '$categoryId',
                        'name': '$name',
                        'author': '$author',
                        'yearOfPublish': '$yearOfPublish',
                        'description': '$description',
                        'thumbnail': '$thumbnail',
                        'content': '$content',
                        'genre': '$genre',
                        'keywords': '$keywords',
                        'createdAt': '$createdAt',
                        'updatedAt': '$updatedAt'
                    }
                }
            }
        }, {
            '$replaceRoot': {
                'newRoot': {
                    '$mergeObjects': [
                        {
                            '$arrayElemAt': [
                                '$data', 0
                            ]
                        }, '$$ROOT'
                    ]
                }
            }
        }, {
            '$project': {
                '_id': 1,
                'categoryId': '$categoryId',
                'name': '$name',
                'author': '$author',
                'yearOfPublish': '$yearOfPublish',
                'description': '$description',
                'thumbnail': '$thumbnail',
                'content': '$content',
                'genre': '$genre',
                'createdAt': '$createdAt',
                'updatedAt': '$updatedAt'
            }
        }]).exec((err, result) => {
            cb(err, result);
        });
    }
};