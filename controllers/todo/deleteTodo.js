const getUserId = require("../../getUserId");
const Todo = require("../../schema/todoSchema");
const User = require("../../schema/userShema");

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id);
    const token = req.cookies.jwt;
    const userId = getUserId(token);
    const user = await User.findByIdAndUpdate(userId, { $pull: { todos: id } });
    user.save();
    res.status(200).json({
      message: "todo deleted",
      data: todo,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTodo;
