const TodoErrors = require("../../catchErrors");
const User = require("../../schema/userShema");

const showTodo = async (req, res, next) => {
  try {
    const user = await User.findById(userId).populate("todos");
    const findTodo = user.todos.find((el) => el._id.toString() === id);
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
