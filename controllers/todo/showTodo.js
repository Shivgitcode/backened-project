const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");

const showTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const findTodo = await Todo.findById(id);
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
