const { getByUser, createFamilyTree, createOrupdateFamilyInfo, createOrUpdateVazhakam, createOrUpdateGothram,
    createOrUpdateName, createOrUpdatePersonalInfo, createOrUpdateSamayal, createThithi, updateThithi,
    updateFamilyTree, getByUserId } = require('../services/family_data');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    getByUser: (req, res) => {
        getByUser(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    getByUserId: (req, res) => {
        getByUserId(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    createOrUpdatePersonalInfo: (req, res) => {
        createOrUpdatePersonalInfo(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    createOrupdateFamilyInfo: (req, res) => {
        createOrupdateFamilyInfo(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    createFamilyTree: (req, res) => {
        createFamilyTree(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    updateFamilyTree: (req, res) => {
        updateFamilyTree(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    createOrUpdateGothram: (req, res) => {
        createOrUpdateGothram(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    createOrUpdateName: (req, res) => {
        createOrUpdateName(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    createOrUpdateSamayal: (req, res) => {
        createOrUpdateSamayal(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    createOrUpdateVazhakam: (req, res) => {
        createOrUpdateVazhakam(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    createThithi: (req, res) => {
        createThithi(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
    updateThithi: (req, res) => {
        updateThithi(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Success', result);
        });
    },
};