const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({});

User.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', User);


    // firstName: String,
    // lastName: String,
    // email: String,
    // password: String,
    // house_Id:  Number,
    // houseAdmin: Boolean,
    // profilePic: String,
    // serverAdmin: Boolean,
    // notification: Boolean,
    // nightmode: Boolean,
    // language: String,
    // shareData: Boolean,