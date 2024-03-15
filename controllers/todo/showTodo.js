const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");
const User = require("../../schema/userShema");

const showTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const userId = req.session.user_id;
    const user = await User.findById(userId).populate("todos");
    const findTodo = user.todos.find((el) => el._id.toString() === id);
    // const findTodo = await Todo.findById(id);
    if (!findTodo) {
      next(new TodoErrors("todo cannot be found", 404));
    } else {
      res.send(findTodo);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = showTodo;
