const Todo = require("../../schema/todoSchema");

const deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.send("todo deleted");
  } catch (error) {
    next(error);
  }
};

module.exports = deleteTodo;
