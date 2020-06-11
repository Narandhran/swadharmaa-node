const { Favourite } = require('../models/favourite');

module.exports = {
    addToFavourite: async (request, cb) => {
        Favourite.create({ 'userId': request.verifiedToken._id, 'libraryId': request.params.id }
            , (err, result) => {
                cb(err, result);
            });
    },
    removeFromFavourite: async (request, cb) => {
        Favourite.findByIdAndDelete(request.params.id)
            .exec((err, result) => {
                cb(err, result);
            });
    },
    listByUser: async (request, cb) => {
        Favourite
            .find({ 'userId': request.verifiedToken._id })
            .populate('libraryId')
            .exec((err, result) => {
                cb(err, result);
            });
    }
};