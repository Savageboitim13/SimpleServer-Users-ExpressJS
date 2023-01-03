const express = require("express");
const app = express();

// Website variables
const host = "127.0.0.1";
const port = 4208;

// Settings the view engine and a logger
app.set("view engine", "ejs");
app.use(logger);

// Accessing static elements -> HTML, CSS JS, IMG etc.
app.use(express.static("public"));
// * Allow express to access the form body
app.use(express.urlencoded({ extended: true }));
// Allows to use/parse json
app.use(express.json());

// Displaying the mainpage
app.get("/", logger, (req, res) => {
  res.render("index", { title: "Hello Express!" });
});

// Createing a route from users.js
const userRouter = require("./routes/users");
app.use("/users", userRouter);

// URL logger -> Gets the navigated URL
function logger(req, res, next) {
  console.log("Logger-app : " + req.originalUrl);
  next();
}

// Running the server
app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});

/**
 * res.status(STATUSCODE)
 * res.send(MESSAGE)
 * res.download(FILEPATH)
 * res.render(FILEPATH)
 * res.json(JSON)
 * app.set(SETTINGNAME, NAME)
 * app.use(); -> Many purposes
 * <%= locals.NAME %>
 */
