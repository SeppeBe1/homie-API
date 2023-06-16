const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Photoschema = new Schema({
    image: String,
    userId: String,
    description: String,
    houseId: String,
    dateTaken: Date,
    houseName: String,
    likes: Number,
    city: String,
    telNr: String,

    
});

const Photo = mongoose.model("Photo", Photoschema);

module.exports = Photo;