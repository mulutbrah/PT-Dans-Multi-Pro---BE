const routes = require("express").Router();
const controller = require("../controllers/user");

routes.post("/register", controller.register);

routes.post("/login", controller.login);

module.exports = routes;
