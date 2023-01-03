const express = require("express");
const router = express.Router();

router.use(logger);

router.get("/", (req, res) => {
  // Name param in the URL -> ?name=NAME
  console.log(req.query.name);
  res.send("User List");
});

// Get the HTML for the new user form
router.get("/new", (req, res) => {
  res.render("users/new");
});

// Create a new user
router.post("/", (req, res) => {
  // ? Variable is for testing purposes
  const isValid = true;
  if (isValid) {
    // * Need a permission from app.js to access the body
    // ? firstName -> new.ejs
    users.push({ firstName: req.body.firstName });
    res.redirect(`/users/${users.length - 1}`);
  } else {
    console.log("Error");
    // ? firstName -> new.ejs
    res.render("users/new", { firstName: req.body.firstName });
  }
});

// Request Handler
router
  // ? Gets every id at /users/id and handle it based on the request
  .route("/:id")
  // ? Gets the user and prints it to the console
  .get((req, res) => {
    console.log(req.user);
    res.send(`Get User With ID ${req.params.id}`);
  })
  // ! Nothing specified
  .put((req, res) => {
    res.send(`Update User With ID ${req.params.id}`);
  })
  // ! Nothing specified - onyl showing purpose
  .delete((req, res) => {
    res.send(`Delete User With ID ${req.params.id}`);
  });

// ! Users list -  required
const users = [{ name: "Kyle" }, { name: "Sally" }];
// ? Gets the users by their ID
router.param("id", (req, res, next, id) => {
  // Random variable = users[id]
  req.user = users[id];
  next();
});

// ? URL logger -> Gets the navigated URL
function logger(req, res, next) {
  console.log("Logger-users: " + req.originalUrl);
  next();
}

module.exports = router;
