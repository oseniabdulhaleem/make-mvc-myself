module.exports = {
  getHomePage: (req, res) => {
    res.render("home.ejs");
  },
  getTodoPage: (req, res) => {
    res.render("todo.ejs");
  },
};
