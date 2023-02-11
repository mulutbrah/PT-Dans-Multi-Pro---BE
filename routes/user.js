const routes = require("express").Router();
const controller = require("../controllers/student");

routes.get("/", controller.getStudents);
routes.post("/", controller.addStudent);

routes.put("/:id", controller.updateStudent);

routes.get("/:id", controller.getStudentById);

routes.delete("/:id", controller.removeStudentById);

module.exports = routes;
