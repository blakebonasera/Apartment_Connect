const { Tenant } = require('../models/tenant');

module.exports = {
    // C
    createTenant: (req, res) => {
        Tenant.create(req.body)
        .then(tenant => {
            res.json({ msg: "success!", tenant: tenant });
        })
        .catch(err => res.json(err));
    },
    // R
    allTenants: (req,res) => {
        Tenant.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    oneTenant: (req,res) => {
        Tenant.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // U
    updateTenant: (req,res) => {
        Tenant.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    // D
    deleteTenant: (req,res) => {
        Tenant.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
}