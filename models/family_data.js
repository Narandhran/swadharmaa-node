const { model, Schema } = require('mongoose');

var familyDataSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    personalInfo: {
        type: Schema.Types.Mixed
    },
    familyInfo: {
        type: Schema.Types.Mixed
    },
    familyTree: [Schema.Types.Mixed],
    shraardhaInfo: {
        gothram: { type: Schema.Types.Mixed },
        name: { type: Schema.Types.Mixed },
        thithi: [Schema.Types.Mixed],
        samayal: { type: Schema.Types.Mixed }

    }
}, { timestamps: true });

var FamilyData = model('family_data', familyDataSchema);

module.exports = { FamilyData };