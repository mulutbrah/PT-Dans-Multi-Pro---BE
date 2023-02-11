const routes = require("express").Router();
const controller = require("../controllers/user");

routes.get("/", controller.getUsers);
routes.post("/", controller.addUser);

routes.put("/:id", controller.updateUser);

routes.get("/:id", controller.getUserById);

routes.delete("/:id", controller.removeUserById);

module.exports = routes;
