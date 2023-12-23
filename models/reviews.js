const { Schema, model } = require("mongoose");
const Joi = require("joi");
const { handleMongooseError } = require("../helpers");

const reviewsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  totalPositiveStars: {
    type: Number,
    required: true,
  },
});

reviewsSchema.post("save", handleMongooseError);

const addSchema = Joi.object({
  name: Joi.string().required(),
  comment: Joi.string().required(),
  totalPositiveStars: Joi.number().required(),
});

const schemas = {
  addSchema,
};

const Review = model("reviews", reviewsSchema);

module.exports = {
  Review,
  schemas,
};
