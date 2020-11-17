const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
    Applicant: {
        type: String,
        required: [true, "You must put the Applicant."],
        minlength: [3, "Must be at least 3 Characters long."],
        maxlength: [100, "Applicant is too Long... Put something else."]
    },

}, { timestamps: true });

module.exports.Application = mongoose.model("Application", ApplicationSchema);