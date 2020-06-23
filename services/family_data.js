const { FamilyData } = require('../models/family_data');

module.exports = {
    create: async (request, cb) => {
        let familyObj = request.body;
        familyObj.user_id = request.verifiedToken._id;
        await FamilyData.create(familyObj, (err, result) => {
            cb(err, result);
        });
    },
    createOrupdateByUser: async (request, cb) => {
        await FamilyData
            .findOneAndUpdate({ 'user_id': request.verifiedToken._id },
                request.body, { upsert: true, new: true })
            .exec((err, result) => {
                cb(err, result);
            });
    },
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
    }
};