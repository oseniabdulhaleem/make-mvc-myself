//this handles the exports of the function that allows me to read and write in to the database

const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  //   userId: {
  //     type: String,
  //     required: true,
  //   },
});

module.exports = mongoose.model("love", TodoSchema);
