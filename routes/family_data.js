const familyCtrl = require('../controllers/family_data');
const { AdminOnly, AllUsers } = require('../utils/auth.util');

module.exports = app => {
    /**
     * All Users
     */
    app.get('/family/list_by_user', AllUsers, familyCtrl.getByUser);
    app.get('/family/list_id/:id',AdminOnly,familyCtrl.getByUserId);
    app.post('/family/create_update_personal_info', AllUsers, familyCtrl.createOrUpdatePersonalInfo);
    app.post('/family/create_update_family_info', AllUsers, familyCtrl.createOrupdateFamilyInfo);
    app.post('/family/create_family_tree', AllUsers, familyCtrl.createFamilyTree);
    app.post('/family/update_family_tree/:id', AllUsers, familyCtrl.updateFamilyTree);
    app.post('/family/create_update_gothram', AllUsers, familyCtrl.createOrUpdateGothram);
    app.post('/family/create_update_name', AllUsers, familyCtrl.createOrUpdateName);
    app.post('/family/create_update_vazhkam', AllUsers, familyCtrl.createOrUpdateVazhakam);
    app.post('/family/create_update_samayal', AllUsers, familyCtrl.createOrUpdateSamayal);
    app.post('/family/create_thithi', AllUsers, familyCtrl.createThithi);
    app.post('/family/update_thithi/:id', AllUsers, familyCtrl.updateThithi);
};