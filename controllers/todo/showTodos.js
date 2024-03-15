const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");

const showTodos = async (req, res) => {
  const todos = await Todo.find({}).populate("user");
  if (!todos) {
    return next(new TodoErrors("this todo not availabe", 404));
  }
  res.send(todos);
};

module.exports = showTodos;
