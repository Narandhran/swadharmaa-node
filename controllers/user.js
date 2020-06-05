const { register, login, requestOtp } = require('../services/user');
const { successHandler, errorHandler } = require('../utils/handler');

module.exports = {
    register: (req, res) => {
        register(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Successfully registered', {});
        });
    },
    login: (req, res) => {
        login(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Login success', result);
        });
    },
    requestOtp: (req, res) => {
        requestOtp(req, (err, result) => {
            if (err) errorHandler(req, res, err);
            else successHandler(req, res, 'Otp sent successfully', result);
        });
    }
};