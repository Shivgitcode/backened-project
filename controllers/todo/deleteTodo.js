const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    const todo = await Todo.findByIdAndDelete(id).populate("user");
    if (todo.user._id.toString() === userId) {
      res.send("todo deleted");
    } else {
      next(new TodoErrors("Unauthorized to perform this action", 403));
    }
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTodo;
