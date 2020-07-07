const { FamilyData } = require('../models/family_data');
const { request } = require('express');

module.exports = {
    getByUser: async (request, cb) => {
        await FamilyData.findOne({ 'user_id': request.verifiedToken._id })
            .exec((err, result) => {
                let finalResult = [];
                if (result) {
                    let { shraardhaInfo, personalInfo, familyInfo, familyTree } = result;
                    finalResult = [shraardhaInfo, personalInfo, familyInfo, familyTree];
                }
                cb(err, result);
            });
    },
    getByUserId: async (request, cb) => {
        await FamilyData.findOne({ 'user_id': request.params.id })
            .exec((err, result) => {
                let finalResult = [];
                if (result) {
                    let { shraardhaInfo, personalInfo, familyInfo, familyTree } = result;
                    finalResult = [shraardhaInfo, personalInfo, familyInfo, familyTree];
                }
                cb(err, result);
            });
    },
    createOrUpdatePersonalInfo: async (request, cb) => {
        request.body.user_id = request.verifiedToken._id;
        await FamilyData
            .findOneAndUpdate({ 'user_id': request.verifiedToken._id },
                { 'personalInfo': request.body },
                { upsert: true, new: true })
            .exec((err, result) => {
                cb(err, result);
            });

    },
    createOrupdateFamilyInfo: async (request, cb) => {
        request.body.user_id = request.verifiedToken._id;
        await FamilyData
            .findOneAndUpdate({ 'user_id': request.verifiedToken._id },
                { 'familyInfo': request.body }, { upsert: true, new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    },
    createFamilyTree: async (request, cb) => {
        FamilyData.findOneAndUpdate({ 'user_id': request.verifiedToken._id },
            {
                $push:
                    { 'familyTree': request.body }
            }, { upsert: true, new: true })
            .exec((err, result) => {
                cb(err, result);
            });;
    },
    updateFamilyTree: async (request, cb) => {
        FamilyData.findOneAndUpdate(
            { 'user_id': request.verifiedToken._id, 'familyTree._id': request.params.id },
            {
                '$set': { 'familyTree.$': request.body }
            }, { new: true }).exec((err, result) => {
                cb(err, result);
            });
    },
    createOrUpdateGothram: async (request, cb) => {
        FamilyData.findOneAndUpdate({ 'user_id': request.verifiedToken._id },
            {
                '$set': { 'shraardhaInfo.gothram': request.body }
            },
            { upsert: true, new: true }).exec((err, result) => {
                cb(err, result);
            });
    },
    createOrUpdateName: async (request, cb) => {
        FamilyData.findOneAndUpdate({ 'user_id': request.verifiedToken._id },
            {
                '$set': { 'shraardhaInfo.name': request.body }
            },
            { upsert: true, new: true }).exec((err, result) => {
                cb(err, result);
            });
    },
    createThithi: async (request, cb) => {
        FamilyData.findOneAndUpdate({ 'user_id': request.verifiedToken._id },
            {
                $push:
                    { 'shraardhaInfo.thithi': request.body }
            }, { upsert: true, new: true })
            .exec((err, result) => {
                cb(err, result);
            });;
    },
    updateThithi: async (request, cb) => {
        FamilyData.findOneAndUpdate(
            { 'user_id': request.verifiedToken._id, 'shraardhaInfo.thithi._id': request.params.id },
            {
                '$set': { 'shraardhaInfo.thithi.$': request.body }
            }, { new: true }).exec((err, result) => {
                cb(err, result);
            });
    },
    createOrUpdateSamayal: async (request, cb) => {
        FamilyData.findOneAndUpdate({ 'user_id': request.verifiedToken._id },
            {
                '$set': { 'shraardhaInfo.samayal': request.body }
            },
            { upsert: true, new: true }).exec((err, result) => {
                cb(err, result);
            });
    },
    createOrUpdateVazhakam: async (request, cb) => {
        FamilyData.findOneAndUpdate({ 'user_id': request.verifiedToken._id },
            {
                '$set': { 'shraardhaInfo.shraddha_vazhakkam': request.body }
            },
            { upsert: true, new: true }).exec((err, result) => {
                cb(err, result);
            });
    }
};