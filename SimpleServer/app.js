const express = require("express");
const app = express();

const host = "127.0.0.1";
const port = 4208;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { title: "Hello Express!" });
});

app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
