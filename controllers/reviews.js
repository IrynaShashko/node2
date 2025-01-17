const { Review } = require("../models/reviews");

const { HttpError, ctrlWrapper } = require("../helpers");

const getAll = async (req, res) => {
  const result = await Review.find();
  res.json(result);
};

const getById = async (req, res) => {
  const { id } = req.params;
  const result = await Review.findOne({ _id: id });
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const add = async (req, res) => {
  console.log(req.body);
  const result = await Review.create(req.body);
  res.status(201).json(result);
};

// const updateById = async (req, res) => {
//   const { id } = req.params;
//   const result = await reviews.updateById(id, req.body);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json(result);
// };

// const deleteById = async (req, res) => {
//   const { id } = req.params;
//   const result = await reviews.deleteById(id);
//   if (!result) {
//     throw HttpError(404, "Not found");
//   }
//   res.json({ message: "Delete success" });
// };

module.exports = {
  getAll: ctrlWrapper(getAll),
  getById: ctrlWrapper(getById),
  add: ctrlWrapper(add),
  // updateById: ctrlWrapper(updateById),
  // deleteById: ctrlWrapper(deleteById),
};
