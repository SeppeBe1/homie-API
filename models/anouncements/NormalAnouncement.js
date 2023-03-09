const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const normalAnouncementSchema = new Schema({
    creator_id: String,
    title: String,
    description: String,
    dateCreated: Date
});

const NormalAnouncement = mongoose.model("NormalAnouncement", normalAnouncementSchema);

module.exports = NormalAnouncement;