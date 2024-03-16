const Todo = require("../../schema/todoSchema");

const updateTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const foundtodo = await Todo.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.send(foundtodo);
  } catch (err) {
    next(err);
  }
};

module.exports = updateTodo;
