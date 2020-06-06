const { list, create, updateById, updateThumbnail } = require('../services/category');

module.exports = {
    create: (req, res) => {
        create(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'category created successfully', result);
        });
    },
    list: (req, res) => {
        list(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    updateById: (req, res) => {
        updateById(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Updated successfully', result);
        });
    },
    updateThumbnail: (req,res)=>{
        updateThumbnail(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Updated successfully', result);
        });
    }
};