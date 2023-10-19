const express = require("express");
router = express.Router();
const homeController = require("../controllers/home");
const todoController = require("../controllers/todo");
router.get("/", homeController.getHomePage);
router.get("/todo", homeController.getTodoPage);

module.exports = router;
