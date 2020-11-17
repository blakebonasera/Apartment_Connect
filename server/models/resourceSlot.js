const ResourceSlotSchema = new mongoose.Schema({
    date:{
        type: Date,
        default: Date.now,
        required: [true, "A date and time is needed to request a slot."]
    },
    reservation:{
        type: Boolean,
        default: false,
        required: [true, "You must have a reservation."]
    }
}, { timestamps: true });



module.exports = {
    ResourceSlotSchema
}