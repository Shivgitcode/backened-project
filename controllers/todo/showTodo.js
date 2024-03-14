const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");

const showTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findTodo = await Todo.findById(id);
    if (!findTodo) {
      next(err);
    } else {
      res.send(findTodo);
    }
  } catch (err) {
    next(err);
  }
};

module.exports = showTodo;
