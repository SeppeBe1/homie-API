const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseRulesSchema = new Schema({
    description: String,
    houseId: String,

});

const Houserules = mongoose.model("Houserules", houseRulesSchema);

module.exports = Houserules;  