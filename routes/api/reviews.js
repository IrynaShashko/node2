const express = require("express");

const reviews = require("../../reviews.json");

const router = express.Router();

router.get("/", (req, res) => {
  res.json(reviews);
});

router.get("/:id", (req, res) => {
  res.json(reviews[0]);
});

router.post("/", (req, res) => {
  res.json(reviews[0]);
});

router.put("/:id", (req, res) => {
  res.json(reviews[0]);
});

router.delete("/:id", (req, res) => {
  res.json(reviews[0]);
});

module.exports = router;
