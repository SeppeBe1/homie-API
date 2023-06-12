const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AnouncementSchema = new Schema({
    type: String,
    description: String,
    creatorId: String,
    houseId: String,

    item: String,
    forWho_id:Number,
    amount: Number,
    percentage: Number,
    paid: Boolean,
    receiptImage: String,

    behomieTime: Date,
    datePlanned: String,
    dateCreated: String,
    beHomieNotificationTime: Date,
});

const Anouncement = mongoose.model("Anouncement", AnouncementSchema);

module.exports = Anouncement;