const { Tenant } = require('../models/tenant');

module.exports = {
    // C
    register: (req, res) => {
        Tenant.create(req.body)
        .then(user => {
            res.json({ msg: "success!", user: user });
        })
        .catch(err => res.json(err));
    }

    // R
    
    
    // U
    
    // D
    
}