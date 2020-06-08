const { model, Schema } = require('mongoose');

var favouriteSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    libraryId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    hint: {
        type: String,
        required: false,
        maxlength: 36
    }
}, { timestamps: true });
var Favourite = model('favourite', favouriteSchema);
module.exports = { Favourite };