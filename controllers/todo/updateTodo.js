const Todo = require("../../schema/todoSchema");

const updateTodo = async (req, res) => {
  const { id } = req.params;
  const todo = await Todo.findByIdAndUpdate(id, req.body, { new: true });
  res.send(todo);
};

module.exports = updateTodo;
