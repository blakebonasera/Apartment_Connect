const { Repair } = require('../models/RepairModel');

module.exports = {
    // Create a Repair
    createRepair: (req, res) => {
        Repair.create(req.body)
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    // Read all Repairs, read one specific Repair
    allRepairs: (req,res) => {
        Repair.find()
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    oneRepair: (req,res) => {
        Repair.findOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    },
    // Update Repair info
    updateRepair: (req,res) => {
        Repair.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err}))
    },
    // Delete a Repair
    deleteRepair: (req,res) => {
        Repair.deleteOne({ _id: req.params.id })
            .then(data => res.json({ message: "success", data: data }))
            .catch(err => res.json({ message: "error", data: err }));
    }
}