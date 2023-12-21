const Joi = require("joi");

const addSchema = Joi.object({
  name: Joi.string().required(),
  comment: Joi.string().required(),
  totalPositiveStars: Joi.number().required(),
});

module.exports = {
  addSchema,
};
