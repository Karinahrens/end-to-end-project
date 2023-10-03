const { Router } = require('express');

const countryController = require('../controllers/countryController.js');

const countryRouter = Router();

countryRouter.get("/", countryController.index);
countryRouter.post("/", countryController.create);
countryRouter.get("/:name", countryController.show);
// countryRouter.delete("/:id", countryController.destroy);

module.exports = countryRouter;