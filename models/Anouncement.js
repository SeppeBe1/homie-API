const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnouncementSchema = new Schema({
    type: String,
    description: String,
    creator_id: Number,
    house_id: Number,

    item: String,
    forWho_id:Number,
    amount: Number,
    percentage: Number,
    paid: Boolean,
    receiptImage: String,

    behomieTime: Date,
    datePlanned: Date,
    dateCreated: Date,
    beHomieNotificationTime: Date,
});

const Anouncement = mongoose.model("Anouncement", AnouncementSchema);

module.exports = Anouncement;