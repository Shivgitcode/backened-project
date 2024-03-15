const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");
const User = require("../../schema/userShema");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const updateTodo = async (req, res, next) => {
  const { id } = req.params;
  const userId = req.session.user_id;
  console.log(userId);
  const todo = await Todo.findById(id).populate("user");
  console.log(todo);
  console.log(todo.user._id);
  if (todo.user._id.toString() === userId) {
    const foundtodo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
    res.send(foundtodo);
  } else {
    return next(
      new TodoErrors("you are not authorized to perform this action", 401)
    );
  }
};

module.exports = updateTodo;
