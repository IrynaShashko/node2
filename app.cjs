const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");

const reviewsRouter = require("./routes/api/reviews");

const reviews = require("./reviews");

const app = express(); // app -веб-сервер

app.use(cors());

app.use("/api/reviews", reviewsRouter);

app.use(async (req, res, next) => {
  console.log("First middleware");
  const { method, url } = req;
  const date = moment().format("DD-MM-YYYY_hh:mm:ss");
  await fs.appendFile("./public/server.log", `\n${method} ${url} ${date}`);
  next();
});

app.get("/", async (req, res) => {
  res.send("<h2>Homepage</h2>");
});

app.get("/reviews", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.json(reviews);
});

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
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
