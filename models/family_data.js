const { model, Schema } = require('mongoose');

var familyDataSchema = new Schema({
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'user',
        required: true
    },
    personalInfo: {
        'timeOfBirth': { type: String, default: null },
        'sharma': { type: String, default: null },
        'maritalStatus': { type: String, default: null },
        'rashi': { type: String, default: null },
        'nakshathram': { type: String, default: null },
        'dateOfBirth': { type: String, default: null },
        'mobileNumber': { type: String, default: null },
        'city': { type: String, default: null },
        'email': { type: String, default: null },
        'name': { type: String, default: null },
        'gender': { type: String, default: null },
        'placeOfBirth': { type: String, default: null },
        'padham': { type: String, default: null }
    },
    familyInfo: {
        'panchangam': { type: String, default: null },
        'kulatheivam': { type: String, default: null },
        'rushi': { type: String, default: null },
        'vaishnavamTelugu': { type: String, default: null },
        'vaishnavam': { type: String, default: null },
        'madhava': { type: String, default: null },
        'nativity': { type: String, default: null },
        'soothram': { type: String, default: null },
        'smarthaSubsectTelugu': { type: String, default: null },
        'pondugalName': { type: String, default: null },
        'smarthaSubsect': { type: String, default: null },
        'thilakam': { type: String, default: null },
        'pravara': { type: String, default: null },
        'motherTongue': { type: String, default: null },
        'sampradhayam': { type: String, default: null },
        'poojas': { type: String, default: null },
        'vedham': { type: String, default: null },
        'gothram': { type: String, default: null }
    },
    familyTree: [{
        'rashi': { type: String, default: null },
        'nakshathram': { type: String, default: null },
        'dateOfBirth': { type: String, default: null },
        'relationship': { type: String, default: null },
        'mobileNumber': { type: String, default: null },
        'city': { type: String, default: null },
        'name': { type: String, default: null },
        'padham': { type: String, default: null }
    }],
    shraardhaInfo: {
        gothram: {
            'mathruGothram': { type: String, default: null },
            'pithruGothram': { type: String, default: null }
        },
        name: {
            'mathruPrapithamaha': { type: String, default: null },
            'pithamaha': { type: String, default: null },
            'mathamahi': { type: String, default: null },
            'prapithamaha': { type: String, default: null },
            'prapithamahi': { type: String, default: null },
            'mathru': { type: String, default: null },
            'mathamaha': { type: String, default: null },
            'pithru': { type: String, default: null },
            'mathruPithamaha': { type: String, default: null },
            'pithamahi': { type: String, default: null },
            'mathruPrapitamahi': { type: String, default: null },
            'mathruPithamahi': { type: String, default: null }
        },
        thithi: [{
            'thithi': { type: String, default: null },
            'time': { type: String, default: null },
            'paksham': { type: String, default: null },
            'relationship': { type: String, default: null },
            'masamChandramanam': { type: String, default: null },
            'date': { type: String, default: null },
            'name': { type: String, default: null },
            'masamSauramanam': { type: String, default: null }
        }],
        samayal: {
            'pazhanga': { type: String, default: null },
            'thyirPachchadi': { type: String, default: null },
            'thugayal': { type: String, default: null },
            'poruchchakuttu': { type: String, default: null },
            'rasam': { type: String, default: null },
            'sweetPachchadi': { type: String, default: null },
            'kari': { type: String, default: null },
            'bhakshanam': { type: String, default: null },
            'samayalType': { type: String, default: null },
            'puliKuttu': { type: String, default: null },
            'other': { type: String, default: null },
            'uruga': { type: String, default: null },
            'payasam': { type: String, default: null },
            'morkuzhambu': { type: String, default: null }
        },
        shraddha_vazhakkam: {
            'pindamCount': { type: String, default: null },
            'tharpanaKoorcham': { type: String, default: null },
            'pundraDharanam': { type: String, default: null },
            'koorcham': { type: String, default: null },
            'krusaram': { type: String, default: null }
        }
    }
}, { timestamps: false });

var FamilyData = model('family_data', familyDataSchema);

module.exports = { FamilyData };