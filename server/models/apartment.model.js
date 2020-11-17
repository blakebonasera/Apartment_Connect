const mongoose = require('mongoose');

const ApartmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your apartment needs a name."],
    },
    repairs: [RepairSchema],// this can be changed to whatever the name of the schema for repairs is
    resources: [ResourceSchema],
    applications: [ApplicationSchema]
}, {timestamps: true});

module.exports.Apartment = mongoose.model("Apartment", ApartmentSchema);