const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const { json } = require("express");

const reviewsPath = path.join(__dirname, "reviews.json");

const getAllReviews = async () => {
  const data = await fs.readFile(reviewsPath, "utf-8");
  console.log(data);
  return JSON.parse(data);
};

const getById = async (id) => {
  const reviews = await getAllReviews();
  const result = reviews.find((item) => item.id === id);
  return result || null;
};

const add = async (data) => {
  console.log("data", data);
  const reviews = await getAllReviews();
  const newReviews = {
    id: nanoid(),
    ...data,
  };
  reviews.push(newReviews);
  console.log(reviews);
  await fs.writeFile(reviewsPath, JSON.stringify(reviews, null, 2));
  return newReviews;
};

const updateById = async (id, data) => {
  const reviews = await getAllReviews();
  const index = reviews.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }
  reviews[index] = { id, ...data };
  await fs.writeFile(reviewsPath, JSON.stringify(reviews, null, 2));
  return reviews[index];
};

const deleteById = async (id) => {
  const reviews = await getAllReviews();
  const index = reviews.findIndex((item) => item.id === id);
  if (index === -1) {
    return null;
  }

  const [result] = reviews.splice(index, 1);
  await fs.writeFile(reviewsPath, JSON.stringify(reviews, null, 2));
  return result;
};

module.exports = {
  getAllReviews,
  getById,
  add,
  updateById,
  deleteById,
};
