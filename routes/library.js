const libraryCtl = require('../controllers/library');
const { AdminOnly, AllUsers } = require('../utils/auth.util');

module.exports = app => {

    /**
     * Admin Only
     */
    app.post('/library/create', AdminOnly, libraryCtl.create);
    app.put('/library/update/:id', AdminOnly, libraryCtl.updateById);
    app.put('/library/update_thumb/:id', AdminOnly, libraryCtl.updateThumbnail);

    /**
     * All Users
     */
    app.get('/library/get_one/:id', libraryCtl.getById);
    app.get('/library/list_recent', libraryCtl.getRecent);
    app.get('/library/list_category/:id',libraryCtl.listByCategory);
};
