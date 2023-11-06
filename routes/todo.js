const express = require("express");
router = express.Router();
const todoController = require("../controllers/todo");

router.get("/", todoController.getTodoPage);
router.put("/markComplete", todoController.markCompleted);
router.put("/markUnComplete", todoController.markUncompleted);
router.delete("/deleteTodo", todoController.deleteTodo);
router.post("/createTodo", todoController.createTodo);

module.exports = router;
