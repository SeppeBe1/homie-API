const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseRulesSchema = new Schema({
    description: String,
    house_Id: String,

});

const HouseRules = mongoose.model("HouseRules", houseRulesSchema);

module.exports = HouseRules;