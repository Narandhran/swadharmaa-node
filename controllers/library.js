const { create, getRecent, updateById, updateThumbnail, getById, listByCategory, genreBasedList,
    searchFilter } = require('../services/library');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    create: (req, res) => {
        create(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', {});
        });
    },
    getRecent: (req, res) => {
        getRecent(req, (err, result) => {
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
    updateThumbnail: (req, res) => {
        updateThumbnail(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Updated successfully', result);
        });
    },
    getById: (req, res) => {
        getById(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    listByCategory: (req, res) => {
        listByCategory(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    genreBasedList: (req, res) => {
        genreBasedList(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    searchFilter: (req, res) => {
        searchFilter(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    }
};