const getUserId = require("../../getUserId");
const Todo = require("../../schema/todoSchema");
const User = require("../../schema/userShema");

const createTodo = async (req, res, next) => {
  try {
    const createTodo = await Todo.create(req.body);
    const userId = getUserId(req.cookies.jwt);
    const user = await User.findById(userId);
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
