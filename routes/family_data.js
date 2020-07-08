const familyCtrl = require('../controllers/family_data');
const { AdminOnly, AllUsers } = require('../utils/auth.util');

module.exports = app => {
    /**
     * All Users
     */
    app.get('/family/list_by_user/:id', AllUsers, familyCtrl.getByUser);
    app.post('/family/create_update_personal_info/:id', AllUsers, familyCtrl.createOrUpdatePersonalInfo);
    app.post('/family/create_update_family_info/:id', AllUsers, familyCtrl.createOrupdateFamilyInfo);
    app.post('/family/create_family_tree/:id', AllUsers, familyCtrl.createFamilyTree);
    app.post('/family/update_family_tree', AllUsers, familyCtrl.updateFamilyTree);
    app.post('/family/create_update_gothram/:id', AllUsers, familyCtrl.createOrUpdateGothram);
    app.post('/family/create_update_name/:id', AllUsers, familyCtrl.createOrUpdateName);
    app.post('/family/create_update_vazhkam/:id', AllUsers, familyCtrl.createOrUpdateVazhakam);
    app.post('/family/create_update_samayal/:id', AllUsers, familyCtrl.createOrUpdateSamayal);
    app.post('/family/create_thithi/:id', AllUsers, familyCtrl.createThithi);
    app.post('/family/update_thithi', AllUsers, familyCtrl.updateThithi);
};