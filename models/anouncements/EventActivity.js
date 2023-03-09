const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema({
    creator_id: String,
    title: String,
    eventDate: Date
});

const EventActivity = mongoose.model("EventActivity", eventSchema);

module.exports = EventActivity;