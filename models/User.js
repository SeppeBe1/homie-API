const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const User = new Schema({
        firstname: String,
        lastname: String,
        email: String,
        houseId: String,
        password: String,
        phonenumber: String,
        houseAdmin: Boolean,
        profilePic: String,
        serverAdmin: Boolean,
        notification: Boolean,
        nightmode: Boolean,
        language: String,
        shareData: Boolean,
        availability: String,
        status: String,
        emailPublic: Boolean,
        phonePublic: Boolean,
});

User.plugin(passportLocalMongoose, { usernameField: 'email' });

module.exports = mongoose.model('User', User);
