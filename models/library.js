const { model, Schema } = require('mongoose');

var librarySchema = new Schema({
    categoryId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    name: {
        type: String,
        required: true,
        maxlength: 36
    },
    thumbnail: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: false
    },
    yearOfPublish: {
        type: String,
        required: false
    },
    description: {
        type: String,
        required: false,
        maxlength: 100
    }
}, { timestamps: true });

var Library = model('library', librarySchema);
module.exports = { Library };