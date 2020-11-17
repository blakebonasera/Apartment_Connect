const { Manager } = require('../models/manager');

module.exports = {
    // C
    createManager: (req, res) => {
        Manager.create(req.body)
        .then(manager => {
            res.json({ msg: "success!", manager: manager });
        })
        .catch(err => res.json(err));
    },
    // R
    allManagers: (req,res) => {
        Manager.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    oneManager: (req,res) => {
        Manager.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // U
    updateManager: (req,res) => {
        Manager.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    // D
    deleteManager: (req,res) => {
        Manager.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
}