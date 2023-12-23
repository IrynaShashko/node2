const app = require("./app.js");

const mongoose = require("mongoose");

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success"), app.listen(3000);
  })
  .catch((error) => console.log(error.message));
