const controller = require('../controllers/manager.controllers');

module.exports = app => {
    // C
    app.post('/api/manager/new', controller.createManager);
    // R
    app.get('/api/managers', controller.allManagers);
    app.get('/api/managers/:id', controller.oneManager);
    // U
    app.patch('/api/managers/:id', controller.updateManager);
    // D
    app.delete('/api/managers/:id', controller.deleteManager);
}