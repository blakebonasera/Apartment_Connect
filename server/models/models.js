const mongoose = require('mongoose');

const ThingySchema = new mongoose.Schema({
    
}, { timestamps: true });

const Thingy = mongoose.model("Thingy", ThingySchema);

module.exports = { Thingy }