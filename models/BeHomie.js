const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const beHomieSchema = new Schema({
    creator_id: Number,
    image: String,
    caption: String,
    city: String,
    postalcode: Number,
    street: String,
    dateCreate: Date,
    likes: Number,
    liked: Boolean,

});

const BeHomie = mongoose.model("BeHomie", beHomieSchema);

module.exports = BeHomie;