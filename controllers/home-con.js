const express = require("express");
const app = express();
//exporting from models
const Task = require("../models/task-schema");
//using body parser to parse the data
app.use(express.urlencoded());
//rendering the home page for GET REQUEST
module.exports.getHome = (req, res) => {
  //finding tasks in the database
  Task.find({}, (err, tasks) => {
    if (err) {
      console.log(err);
      return;
    }
    //rendering the home page
    return res.render("../views/to-do-list.ejs", {
      //template enngine variables here
      newTasks: tasks,
    });
  });
};
//FOR POST REQUEST
//making the controller to save data to the database
module.exports.createTask = (req, res) => {
  //calling databse create function
  Task.create(
    {
      description: req.body.description,
      category: req.body.Category,
      date: req.body.due_date,
    },
    (err) => {
      if (err) {
        console.log(err);
        return;
      }
      console.log("Task succesfully added to the databse");
      console.log(
        `****${req.body.description} ${req.body.Category} ${req.body.due_date}`
      );
      return res.redirect("back");
    }
  );
};

//delete task get request here
module.exports.delTask = (req, res) => {
  //get the id from the query in the url
  let id = req.params.id;
  console.log(`*************this is the id**********${id}`);
  //find the task in the databse using id
  Task.findByIdAndDelete(id, (err) => {
    if (err) {
      console.log(`Error in deleting an object from databse:-${err}`);
      return;
    }
  });
  return res.redirect("back");
};
