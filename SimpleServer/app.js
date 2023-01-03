const express = require("express");
const app = express();

const host = "127.0.0.1";
const port = 4208;

app.set("view engine", "ejs");
app.use(logger);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", logger, (req, res) => {
  res.render("index", { title: "Hello Express!" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

function logger(req, res, next) {
  console.log(req.originalUrl);
  next();
}

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
 *
 * <%= locals.NAME %>
 */
