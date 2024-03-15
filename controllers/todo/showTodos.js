const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");
const User = require("../../schema/userShema");
const jwt = require("jsonwebtoken");

const showTodos = async (req, res, next) => {
  const token = req.cookies.jwt;
  const { id } = jwt.verify(token, "thisistopsecret");
  // console.log(decodedToken);
  const user = await User.findById(userId).populate("todos");
  const todos = user.todos;
  if (todos.length === 0) {
    return next(new TodoErrors("this todo not availabe", 404));
  }
  res.send(todos);
};

module.exports = showTodos;
