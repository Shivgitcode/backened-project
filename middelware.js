const jwt = require("jsonwebtoken");

const checkLoggedIn = async (req, res, next) => {
  const token = req.cookies.jwt;

  if (token) {
    jwt.verify(token, "thisistopsecret", (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        res.redirect("/home");
      } else {
        console.log(decodedToken);
        next();
      }
    });
  } else {
    res.redirect("/home");
  }
};

const checkUser = async (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    userId = jwt.verify(token, "thisistopsecret").id;
    return next();
  } else {
    res.redirect("/home");
  }
};

module.exports.checkLoggedIn = checkLoggedIn;
module.exports.checkUser = checkUser;
