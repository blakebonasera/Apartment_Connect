const { allUser } = require('../controllers/apartment.controller');
const controller = require('../controllers/apartment.controller');
const uController = require('../controllers/user.controllers');
const { authenticate } = require("../config/jwt.config");

module.exports = app => {
    // C
    app.post('/api/apartments/new', controller.createApartment);
    app.post('/api/users/new', controller.createUser);
    // R
    app.get('/api/apartments', controller.allApartments);
    app.get('/api/apartments/:id', controller.oneApartment);
    app.get("/api/users", authenticate, uController.allUsers);
    app.get("/api/users/loggedin", authenticate, uController.getLoggedInUser);
    app.get('/api/users/:id', controller.oneUser);
    // U
    app.patch('/api/apartments/:id', controller.updateApartment);
    app.patch('/api/apartments/:id/tenants/new', controller.addTenant);
    app.patch('/api/apartments/:id/repair/new', controller.addRepair);
    app.patch('/api/apartments/:id/repair/update', controller.updateRepairStatus);
    app.patch('/api/users/:id', controller.updateUser);
    app.patch('/api/apartments/:id/tenants/remove', controller.removeTenant);
    // D
    app.delete('/api/apartments/:id', controller.deleteApartment);
    //login
    app.post("/api/login", uController.login);
    //logout
    app.post("/api/logout", uController.logout);
    // this route now has to be authenticated

}