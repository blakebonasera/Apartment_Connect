const controller = require('../controllers/tenant.controllers');

module.exports = app => {
    // C
    app.post('/api/tenant/new', controller.createTenant);
    // R
    app.get('/api/tenants', controller.allTenants);
    app.get('/api/tenants/:id', controller.oneTenant);
    // U
    app.patch('/api/tenants/:id', controller.updateTenant);
    // D
    app.delete('/api/tenants/:id', controller.deleteTenant);
}