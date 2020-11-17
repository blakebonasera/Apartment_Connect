const mongoose = require('mongoose');
const { ResourcesSlotSchema } = require('./resourceSlot');

    const ResourcesSchema = new mongoose.Schema({
        resourceTitle:{
            type: String,
            required: [true, "You must pick a resource to use."]
        },
        resourcesSlot: [ResourcesSlotSchema]
    }, { timestamps: true });

    const Resources = mongoose.model("Resources", ResourcesSchema);

    module.exports = {
        Resources
    }