//requiring global files
const express = require("express");
const db = require("./config/mongoose");
const Name = require("./models/name-schema");
const app = express();
const port = 8000;
//setting the view engine
app.set("view engine", "ejs");
app.set("views", "./view");
//settting the body-parser
app.use(express.urlencoded());
//setting up the express routes
app.use("/", require("./routes/index"));
//setting up static files for external CSS JS and IMAGES
app.use(express.static("public"));
//seeting up the port to listen
app.listen(port, (err) => {
  if (err) {
    console.log(
      `The following error has occured in starting the server ${err}`
    );
  }
  console.log(`Server started on ${port} `);
});
