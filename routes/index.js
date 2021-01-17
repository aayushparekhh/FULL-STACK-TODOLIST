const express = require("express");
const app = express();
const router = express.Router();
//using body parser to parse the data
app.use(express.urlencoded());
//requring the home controller
const homeCon = require("../controllers/home-con");
router.get("/", homeCon.getHome);
//adding post route for adding tasks
router.post("/", homeCon.createTask);
//route for deleting a task
router.get("/delete-task/:id", homeCon.delTask);
module.exports = router;
console.log("router working");
