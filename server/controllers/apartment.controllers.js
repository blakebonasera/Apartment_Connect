const {Mongoose} = require('mongoose');
const {Apartment} = require('../models/apartment.model');

module.exports = {
    newApartment: (req, res) => {
        Apartment.create(req.body)
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: "error", err}));
    },
    allApartments: (req,res) => {
        Apartment.find()
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: "error", err}));
    },
    findApartment: (req, res) => {
        Apartment.findOne({_id: req.params.id})
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: "error", err}));
    },
    addApplication: (req, res) => {
        Apartment.findOneAndUpdate({_id: req.params.id}, {$addToSet: {applications: req.body}}, {runValidators: true, new: true})
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: "error", err}));
    },
    addResource: (req, res) => {
        Apartment.findOneAndUpdate({_id: req.params.id}, {$addToSet: {resources: req.body}}, {runValidators: true, new: true})
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: "error", err}));
    },
    addRepair: (req, res) => {
        Apartment.findOneAndUpdate({_id: req.params.id}, {$addToSet: {repairs: req.body}}, {runValidators: true, new: true})
            .then(data => res.json({message: "success", data}))
            .catch(err => res.json({message: "error", err}));
    },

}