const express = require("express");
const router = express.Router();

//Employee model
const Employee = require("../../models/employee");

//User model
const User = require("../../models/user");

//Get request(Get all employees)
router.get("/getemp", (req, res) => {
  Employee.find().then((emps) => res.json(emps));
});

//Post request(Create new employee)
router.post("/createemp", (req, res) => {
  const newEmp = new Employee({
    name: req.body.name,
    rate: req.body.rate,
  });
  newEmp.save().then((empnew) => res.json(empnew));
});

//Delete request
router.delete("/deleteemp/:name", (req, res) => {
  Employee.findOneAndRemove({ name: req.params.name })
    .then((emp) => emp.remove().then(() => res.json({ success: true })))
    .catch((err) => res.status(404).json({ success: false }));
  // Employee.findById(req.params.id)
  //     .then(emp => emp.remove().then(() => res.json({success: true})))
  //     .catch(err => res.status(404).json({success: false}));
});

//Put request(Update an employee)
router.put("/updateemp/:name", (req, res) => {
  Employee.findOneAndUpdate(
    { name: req.params.name },
    {
      rate: req.body.rate,
    },
    { new: true },
    (err, data) => {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({ success: true, new: data });
      }
    }
  );
});

//Put request(Update HOURS)
router.put("/updatehours/:name", (req, res) => {
  Employee.findOneAndUpdate(
    { name: req.params.name },
    {
      Jan: {
        hours: req.body.Jan.hours,
      },
    },
    { new: true, runValidators: false },
    (err, data) => {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({ success: true, new: data });
      }
    }
  );
});
//Put request(Update Variation)
router.put("/updatevar/:name", (req, res) => {
  Employee.findOneAndUpdate(
    { name: req.params.name },
    {
      Jan: {
        variation: req.body.Jan.variation,
      },
    },
    { new: true, runValidators: false },
    (err, data) => {
      if (err) {
        res.json({ success: false, error: err });
      } else {
        res.json({ success: true, new: data });
      }
    }
  );
});

//Post request(Create new user)
router.post("/register", (req, res) => {
  const { name, password, password2 } = req.body;
  if (password !== password2) {
    res.json({ success: false, error: "Passwords dont match" });
    return;
  }
  const newUser = new User({
    name: req.body.name,
    password: req.body.password,
  });
  //CHECK IF USER EXISTS.........

  newUser
    .save()
    .then((empnew) => {
      res.redirect("http://localhost:3000/login");
    })
    .catch((err) => console.log(err));
});
module.exports = router;
