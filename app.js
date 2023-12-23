const express = require("express");
const moment = require("moment");
const fs = require("fs/promises");
const cors = require("cors");
const logger = require("morgan");
require("dotenv").config(); //env

const reviewsRouter = require("./routes/api/reviews");

const app = express(); // app -веб-сервер
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));

app.use(cors());

app.use(express.json());

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

app.get("/api/reviews", (req, res) => {
  console.log(req.url);
  console.log(req.method);
  res.json(reviews);
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
