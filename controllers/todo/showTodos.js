const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");
const User = require("../../schema/userShema");

const showTodos = async (req, res, next) => {
  const id = req.session.user_id;
  const user = await User.findById(id).populate("todos");
  const todos = user.todos;
  if (todos.length === 0) {
    return next(new TodoErrors("this todo not availabe", 404));
  }
  res.send(todos);
};

module.exports = showTodos;
