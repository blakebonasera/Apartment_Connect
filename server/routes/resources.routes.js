const controller = require('../controllers/resources.controllers');

    module.exports = app => {
        app.post('/api/resources', controller.createResources);
        app.get('/api/resources', controller.allResources);
        app.get('/api/resources/:id', controller.oneResources);
        app.patch('/api/resources/:id', controller.updateResources);
        app.delete('/api/resources/:id', controller.DeleteResources);
    }