const userCtl = require('../controllers/user');
const { AdminOnly, AllUsers } = require('../utils/auth.util');

module.exports = app => {
    /**
     * All users
     */
    app.post('/user/register', userCtl.register);
    app.post('/user/login', userCtl.login);
    app.get('/user/requestOtp/:mobile', userCtl.requestOtp);

    /**
     * Verified Users
     */
    app.put('/user/update_dp', AllUsers, userCtl.updateDp);
    app.get('/user/my_profile', AllUsers, userCtl.getProfileInfo);
    app.put('user/update_profile', AllUsers, userCtl.updateProfile);
};