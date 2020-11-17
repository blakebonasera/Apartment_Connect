const mongoose = require('mongoose');

const RepairSchema = new mongoose.Schema({
    location: {
        type: String,
        required: [true, "Please tell us the location."],
        minlength: [3, "Must be at least 3 Characters long."],
        maxlength: [100, "Location is too Long."]
    },
    details:{
        type: String,
        required:[true,"You must tell us the details"],
        minlength:[5,"Must be longer than 5 characters!"]
    },
    urgency:{
        type: String,
        required:[true,"You must tell us how urgent this is."]
    }
    




    

}, { timestamps: true });

module.exports.Repair = mongoose.model("Repair", RepairSchema);