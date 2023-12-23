const app = require("./app.js");

const mongoose = require("mongoose");

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log("Database connect success"), app.listen(PORT);
  })
  .catch((error) => console.log(error.message));
