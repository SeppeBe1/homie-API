const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
    house_Id:  Number,
    houseAdmin: Boolean,
    profilePic: String,
    serverAdmin: Boolean,
    notification: Boolean,
    nightmode: Boolean,
    language: String,
    shareData: Boolean,
});

const User = mongoose.model("User", userSchema);

module.exports = User;