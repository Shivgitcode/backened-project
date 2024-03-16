const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");
const User = require("../../schema/userShema");
const mongoose = require("mongoose");

const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findById(id).populate("user");
    if (todo.user._id.toString() === userId) {
      const foundtodo = await Todo.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      res.send(foundtodo);
    } else {
      return next(
        new TodoErrors("you are not authorized to perform this action", 401)
      );
    }
  } catch (err) {
    next(err);
  }
};

module.exports = updateTodo;
