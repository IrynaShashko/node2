const app = require("./app.js");

const mongoose = require("mongoose");

const DB_HOST =
  "mongodb+srv://Iryna:4lH54vZ9rQaQEyDd@cluster0.w9ju3xr.mongodb.net/massage?retryWrites=true&w=majority";

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success"), app.listen(3000);
  })
  .catch((error) => console.log(error.message));
