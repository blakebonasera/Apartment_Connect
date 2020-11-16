const { Tenant } = require('../models/tenant');

module.exports = {
    // C
    register: (req, res) => {
        Tenant.create(req.body)
        .then(tenant => {
            res.json({ msg: "success!", tenant: tenant });
        })
        .catch(err => res.json(err));
    }

    // R
    
    
    // U
    
    // D
    
}