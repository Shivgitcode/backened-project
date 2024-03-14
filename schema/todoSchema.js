const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todoName: {
    required: true,
    type: String,
  },
  isDone: {
    required: true,
    type: Boolean,
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
