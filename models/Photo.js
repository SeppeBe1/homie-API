const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Photoschema = new Schema({
    image: String,
    userId: String,
    houseId: String,
    dateTaken: String,
    houseName: String,
    likes: Number,
    city: String,

    
});

const Photo = mongoose.model("Photo", Photoschema);

module.exports = Photo;