//importing the route
const express = require("express");
const app = express();
const homeRoute = require("./routes/home");
const todoRoute = require("./routes/todo");

// handle env in node.js (which allows me to call process.env anywhere)
// const dotenv = require("dotenv");
// dotenv().config({ path: "./config/.env" });

//connect to the database
// const connectDB = require("./config/db");

// connectDB();

// set the rendering engine
app.set("view engine", "ejs");

// set the routes

app.use("/", homeRoute);
app.use("/todo", todoRoute);
app.listen(3000, () => {
  console.log("started");
});
