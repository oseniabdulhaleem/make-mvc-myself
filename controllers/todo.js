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
};
