const Todo = require("../model/Todo");
module.exports = {
  getTodoPage: async (req, res) => {
    try {
      const todoItems = await Todo.find({ completed: false });
      console.log(todoItems);
      const itemsLeft = await Todo.countDocuments({ completed: false });
      res.render("todo.ejs", {
        todos: todoItems,
        left: itemsLeft,
      });
    } catch (err) {
      console.log(err);
    }
  },
  createTodo: async (req, res) => {
    try {
      console.log(req.body.todoItem);
      await Todo.create({
        todo: req.body.todoItem,
        completed: false,
      });
      console.log("Todo has been added!");
      console.log("logging completed == false");

      res.redirect("/todos");
    } catch (err) {
      console.log(err);
    }
  },
  markCompleted: async (req, res) => {
    try {
      console.log(req.body.todoItem);
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        { completed: true }
      );
      console.log("Todo has been updated!");
      res.json("marked updated");
    } catch (err) {
      console.log(err);
    }
  },
  markUnCompleted: async (req, res) => {
    try {
      console.log(req.body.todoItem);
      await Todo.findOneAndUpdate(
        { _id: req.body.todoIdFromJSFile },
        { completed: false }
      );
      console.log("Todo has been updated to incomplete!");
      res.json("Todo has been updated to incomplete!");
    } catch (err) {
      console.log(err);
    }
  },
  deleteTodo: async (req, res) => {
    try {
      console.log(req.body.todoItem);
      await Todo.findOneAndDelete({ _id: req.body.todoIdFromJSFile });
      console.log("Todo has been deleted!");
    } catch (err) {
      console.log(err);
    }
  },
};
