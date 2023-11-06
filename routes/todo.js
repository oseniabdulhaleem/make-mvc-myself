const express = require("express");
router = express.Router();
const todoController = require("../controllers/todo");

router.get("/", todoController.getTodoPage);
router.post("/createTodo", todoController.createTodo);

module.exports = router;
