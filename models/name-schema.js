const mongoose = require("mongoose");
const Schema = mongoose.Schema;
//creating a schema
const nameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
});
const Name = mongoose.model("Name", nameSchema);
module.exports = Name;
