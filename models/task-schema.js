const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creating a schema for tasks
const taskSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: false,
  },
});
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
