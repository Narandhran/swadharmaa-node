const userCtl = require('../controllers/user');

module.exports = app => {
    app.post('/user/register', userCtl.register);
    app.post('/user/login', userCtl.login);
    app.get('/user/requestOtp/:mobile', userCtl.requestOtp);
};