const { Router } = require("express");
const ensureAuthenticated = require("../middlewares/ensureAuthenticated");
const UsersController = require("../controllers/UsersController");
const UserValidatedController = require("../controllers/UserValidatedController");

const usersRoutes = Router();

const usersController = new UsersController();
const userValidatedController = new UserValidatedController();

usersRoutes.post("/", usersController.create);
usersRoutes.get("/validated", ensureAuthenticated, usersController.index);

module.exports = usersRoutes;
