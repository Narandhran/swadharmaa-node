const { Genre } = require('../models/genre');

module.exports = {
    create: async (request, cb) => {
        Genre.create(request.body, (err, result) => {
            cb(err, result);
        });
    },
    list: async (request, cb) => {
        Genre.find({})
            .exec((err, result) => {
                cb(err, result);
            });
    }
};