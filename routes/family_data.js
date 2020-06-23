const familyCtrl = require('../controllers/family_data');
const { AdminOnly, AllUsers } = require('../utils/auth.util');

module.exports = app => {
    /**
     * All Users
     */
    // app.post('/family/create', AllUsers, familyCtrl.create);
    app.put('/family/update_by_user', AllUsers, familyCtrl.createOrupdateByUser);
    app.get('/family/list_by_user', AllUsers, familyCtrl.getByUser);
};