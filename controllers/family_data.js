const { create, createOrupdateByUser, getByUser } = require('../services/family_data');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    create: (req, res) => {
        create(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    createOrupdateByUser: (req,res)=>{
        createOrupdateByUser(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Data updated successfully', result);
        });
    },
    getByUser: (req,res)=>{
        getByUser(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    }
};