const TodoErrors = require("../../catchErrors");
const Todo = require("../../schema/todoSchema");
const User = require("../../schema/userShema");
const session = require("express-session");

const createTodo = async (req, res, next) => {
  try {
    const id = req.session.user_id;
    console.log(id);
    const createTodo = await Todo.create(req.body);
    const user = await User.findById(id);
    console.log(user);
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
