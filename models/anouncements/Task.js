const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    creator_id: String,
    title: String,
    description: String,
    datePlanned: Date,
    dateCreated: Date,
});

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;