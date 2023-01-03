"use strict";

const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("User List");
});

router.get("/new", (req, res) => {
  res.render("users/new");
});

router.post("/", (req, res) => {
  console.log(req.body.firstName);
  res.send("Create new User");
});

router
  .route("/:id")
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get user with ID ${req.params.id}`);
  })
  .put((req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
  })
  .delete((req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
  });

const users = [
  {
    fname: "Kyle",
    lname: "none",
    age: 32,
    gender: "male",
    job: "YouTuber",
    email: "webDev@mail.com",
    username: "WebDev",
    password: "Simplified",
  },
  {
    fname: "CodingLife",
    lname: "nonde",
    age: 13,
    gender: "male",
    job: "Hobby Developer",
    email: "codingHome@gmail.com",
    username: "ServerOwner",
    password: "CodingHomeUniverse",
  },
  {
    fname: "Venen",
    lname: "Jean",
    age: 15,
    gender: "male",
    job: "Full Stack Developer",
    email: "SamVenom69@gmail.com",
    username: "rest-client",
    password: "beta-tester",
  },
];
router.param("id", (req, res, next, id) => {
  // Random Variable = users[id]
  req.user = users[id];
  next();
});

module.exports = router;
