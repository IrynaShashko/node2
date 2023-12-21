const express = require("express");

const router = express.Router();

const ctrl = require("../../controllers/reviews");

const validateBody = require("../../middlewares");

const schemas = require("../../schemas/reviews");

router.get("/", ctrl.getAll);

router.get("/:id", ctrl.getById);

router.post("/", validateBody(schemas.addSchema), ctrl.add);

router.put("/:id", validateBody(schemas.addSchema), ctrl.updateById);

router.delete("/:id", ctrl.deleteById);

module.exports = router;
