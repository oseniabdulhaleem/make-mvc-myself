//importing the route
const express = require("express");
const app = express();
const homeRoute = require("./routes/home");
const todoRoute = require("./routes/todo");
const logger = require("morgan");

// handle env in node.js (which allows me to call process.env anywhere)
const dotenv = require("dotenv");
dotenv.config({ path: "./config/.env" });

//connect to the database
const connectDB = require("./config/db");

connectDB();

// set the rendering engine
app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(logger("dev"));

// set the routes

app.use("/", homeRoute);
app.use("/todos", todoRoute);
app.listen(process.env.PORT, () => {
  console.log("started");
});
