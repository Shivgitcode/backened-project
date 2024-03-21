const jwt = require("jsonwebtoken");
const TodoErrors = require("./catchErrors");
const Todo = require("./schema/todoSchema");

const checkLoggedIn = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "thisistopsecret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/");
  }
};

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  const userId = jwt.verify(token, "thisistopsecret").id;

  if (token) {
    const { id } = req.params;
    const todo = await Todo.findById(id).populate("user");
    if (todo.user._id.toString() === userId) {
      userId;
      next();
    } else {
      next(new TodoErrors("unauthorized to do this action", 401));
    }
  } else {
    res.redirect("/");
  }
};

module.exports.checkLoggedIn = checkLoggedIn;
module.exports.checkUser = checkUser;
