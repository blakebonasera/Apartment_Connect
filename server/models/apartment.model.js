const mongoose = require('mongoose');
const {RepairSchema} = require('./RepairModel');

const ApartmentSchema = new mongoose.Schema({
    name: {
        type: Number,
        required: [true, "apartment must have a name."]
    },
    tenants: {
        type: String,
        default: "",
    },
    repairs: [RepairSchema]
}, {timestamps: true});

module.exports.Apartment = mongoose.model("Apartment", ApartmentSchema);