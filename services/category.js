const { Category } = require('../models/category');

module.exports = {
    create: async (request, cb) => {
        let upload = loadMulter(5, ['jpg,jpeg,png']).single('category');
        await upload(request, null, (err) => {
            if (err)
                cb(err,{});
            else {
                let persisted = JSON.parse(request.body.textField);
                persisted.thumbnail = request.file.filename;
                Category.create(persisted, (err, result) => {
                    cb(err, result);
                });
            }
        });
    },
    list: async (request, cb) => {
        await Category.find({})
            .exec((err, result) => {
                cb(err, result);
            });
    },
    updateById: async (request, cb) => {
        await Category
            .findByIdAndUpdate(request.params.id, request.body, { new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    },
    updateThumbnail: async(request,cb)=>{
        let upload = loadMulter(5, ['.jpg', '.png', '.jpeg']).single('category');
        await upload(request, null, (err) => {
            if (err)
                cb(err,{});
            else {
                Category
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