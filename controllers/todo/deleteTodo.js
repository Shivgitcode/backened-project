const Todo = require("../../schema/todoSchema");

const deleteTodo = async (req, res) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.send("todo deleted");
};

module.exports = deleteTodo;
