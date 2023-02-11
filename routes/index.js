const routes = require("express").Router();
const controller = require("../controllers/user");
const JobController = require("../controllers/job");

routes.post("/register", controller.register);

routes.post("/login", controller.login);

routes.post("/jobs", JobController.getList);
routes.get("/jobs/:id", JobController.getDetail);

module.exports = routes;
