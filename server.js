const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// a route for home page
app.get("/home", (req, res) => {
  res.json({ message: "NodeJs CRUD Application" });
});

module.exports = app => {
    const employees = require("../controllers/employee.controller.js");
  
    // Create a new employee
    app.post("/employees", employees.create);
  
    // Retrieve all employees
    app.get("/employees", employees.findAll);
  
    // Retrieve a single employee with employeeId
    app.get("/employees/:employeeId", employees.findOne);
  
    // Update a employee with employeeId
    app.put("/employees/:employeeId", employees.update);
  
    // Delete a employee with employeeId
    app.delete("/employees/:employeeId", employees.delete);
  
    // Create a new employee
    app.delete("/employees", employees.deleteAll);
  };

// setting port to 3000, & listening for requests http request.
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});