const TodoErrors = require("../../catchErrors");
const getUserId = require("../../getUserId");
const User = require("../../schema/userShema");

const showTodos = async (req, res, next) => {
  const userId = getUserId(req.cookies.jwt);
  const user = await User.findById(userId).populate("todos");
  const todos = user.todos;
  if (todos.length === 0) {
    return next(new TodoErrors("this todo not availabe", 404));
  }
  res.json({
    data: todos,
    success: true,
    message: "todo Sent",
  });
};

module.exports = showTodos;
