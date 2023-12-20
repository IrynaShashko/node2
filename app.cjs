const express = require("express");
const moment = require("moment");

const reviews = require("./reviews");

const app = express(); // app -веб-сервер

app.use((req, res, next) => {
  console.log("First middleware");
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  next();
});

app.get("/", (req, res) => {
  res.send("<h2>Homepage</h2>");
});

app.get("/reviews", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.json(reviews);
});

app.listen(3000, () => console.log("Server running"));

// const fs = require("fs/promises");

// const readText = async () => {
//   const data = await fs.readFile("./files/file.txt", "utf-8");
//   console.log(data);
// };

// readText();

// const addText = async () => {
//   await fs.appendFile("./files/file.txt", "\nCreate my own backend");
// };

// // addText();

// const replaceText = async () => {
//   const result = await fs.writeFile("./files/file.txt", "I love this");
//   console.log(result);
// };

// // replaceText();

// const reviews = require("./reviews");

// console.log("reviews", reviews);
