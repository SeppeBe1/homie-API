const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    houseName: String,
    city: String,
    postalcode: Number,
    street: String,
    streetNumber: Number,
    profilePic: String,

});

const House = mongoose.model("House", houseSchema);

module.exports = House;