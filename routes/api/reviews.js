const express = require("express");

// const reviews = require("../../reviews.json");

const reviews = require("../../models/reviews");

const router = express.Router();

router.get("/", async (req, res) => {
  const result = await reviews.getAllReviews();
  res.json(result);
});

// router.get("/:id", (req, res) => {
//   res.json(reviews[0]);
// });

// router.post("/", (req, res) => {
//   res.json(reviews[0]);
// });

// router.put("/:id", (req, res) => {
//   res.json(reviews[0]);
// });

// router.delete("/:id", (req, res) => {
//   res.json(reviews[0]);
// });

module.exports = router;
