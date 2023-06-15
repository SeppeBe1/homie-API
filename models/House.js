const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
    housename: String,
    city: String,
    postalcode: Number,
    street: String,
    streetNumber: Number,
    profilePic: String,
    houseCode: Number,
});

const House = mongoose.model("House", houseSchema);

module.exports = House;