const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/to-do-list-cn", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "error connecting to the database"));
db.once("open", function () {
  console.log("Successfuly connected to the databse");
});
