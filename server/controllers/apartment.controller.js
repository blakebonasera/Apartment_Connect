const {Apartment} = require('../models/apartment.model');
const {User} = require('../models/user')

module.exports = {
    // C
    createApartment: (req, res) => {
        Apartment.create(req.body)
        .then(data => {
            res.json({ msg: "success!", data: data });
        })
        .catch(err => res.json(err));
    },
    createUser: (req, res) => {
        User.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // R
    allApartments: (req,res) => {
        Apartment.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    getLoggedInUserApartment: (req,res) => {
        console.log(`Request params ${req.params.id}`)
        Apartment.find({tenants: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    oneApartment: (req,res) => {
        Apartment.findOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    allUser: (req, res) => {
        User.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    oneUser: (req, res) => {
        User.findOne({_id: req.params.id})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // U
    updateApartment: (req,res) => {
        Apartment.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    updateUser: (req, res) => {
        User.findOneAndUpdate({_id: req.params.id}, req.body, {runValidators: true, new: true})
            .then(data => res.json(data))
            .catch(err => res.json(err))
    },
    addTenant: (req, res) => {
        console.log(`Request Body${JSON.stringify(req.body)}`)
        Apartment.findOneAndUpdate({_id: req.params.id}, req.body, {new: true}) //pass back {_id: user._id}
            .then(data => {
                res.json({message: "success", data: data})
            })
            .catch(err => res.json({message: "error", errors: err}));
    },
    addRepair: (req, res) => {
        console.log("inside addRepair");
        console.log(`apartment ID: ${req.params.id}`);
        console.log(`Repair body: ${JSON.stringify(req.body)}`);
        Apartment.findOneAndUpdate({_id: req.params.id}, {$addToSet: {repairs: req.body}}, {runValidators: true, new: true})
            .then(data => res.json({message: "success", data: data}))
            .catch(err => res.json({message: "error", errors: err}));
    },
    updateRepairStatus: (req, res) => {
        Apartment.findOneAndUpdate({"repairs._id": req.params.id}, {"repairs.$.status": req.body.status}, {runValidators: true, new: true})
            .then(data => res.json({message: "success", data: data}))
            .catch(err => res.json({message: "error", errors: err}));
    },
    // D
    deleteApartment: (req,res) => {
        Apartment.deleteOne({ _id: req.params.id })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    removeTenant: (req, res) => {
        Apartment.findOneAndUpdate({_id: req.params.id}, {tenants: ""}, {new: true})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
}