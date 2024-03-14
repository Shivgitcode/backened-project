const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");
const User = require("../../schema/userShema");

const createTodo = async (req, res, next) => {
  try {
    const { id } = req.params;
    const createTodo = await Todo.create(req.body);
    const user = await User.findById(id);
    user.todos.push(createTodo);
    createTodo.user = user;
    createTodo.save();
    user.save();
    res.send("todo made");
  } catch (error) {
    next(error);
  }
};

module.exports = createTodo;
