const { model, Schema } = require('mongoose');

var familyDataSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    personalInfo: {
        type: Schema.Types.Mixed,
        default: null
    },
    familyInfo: {
        type: Schema.Types.Mixed,
        default: null
    },
    familyTree: [Schema.Types.Mixed],
    shraardhaInfo: {
        gothram: { type: Schema.Types.Mixed, default: null },
        name: { type: Schema.Types.Mixed, default: null },
        thithi: { type: [Schema.Types.Mixed], default: [] },
        samayal: { type: Schema.Types.Mixed, default: null },
        shraddha_vazhakkam: { type: Schema.Types.Mixed, default: null }
    }
}, { timestamps: true });

var FamilyData = model('family_data', familyDataSchema);

module.exports = { FamilyData };