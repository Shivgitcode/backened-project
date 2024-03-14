const Todo = require("../../schema/todoSchema");

const showTodos = async (req, res) => {
  const todos = await Todo.find({}).populate("user");
  res.send(todos);
};

module.exports = showTodos;
