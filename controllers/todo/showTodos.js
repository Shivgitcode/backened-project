const TodoErrors = require("../../catchErrors");
const getUserId = require("../../getUserId");
const User = require("../../schema/userShema");

const showTodos = async (req, res, next) => {
  try {
    const userId = getUserId(req.cookies.jwt);
    const user = await User.findById(userId).populate("todos");
    const todos = user.todos;
    console.log(todos);
    res.status(200).json({
      data: todos,
      success: true,
      message: "todo Sent",
    });
  } catch (err) {
    next(err);
  }
};

module.exports = showTodos;
