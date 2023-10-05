const { Router } = require('express');

const countryController = require('../controllers/countryController.js');

const countryRouter = Router();

countryRouter.get("/", countryController.index);
countryRouter.post("/", countryController.create);
countryRouter.get("/:name", countryController.show);
countryRouter.update("/:name", countryController.update);
countryRouter.delete("/:name", countryController.destroy);

module.exports = countryRouter;