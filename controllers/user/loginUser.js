const User = require("../../schema/userShema");
const bcrypt = require("bcrypt");
const express = require("express");
const app = express();
const session = require("express-session");

app.use(session({ secret: "thisisnotagoodsecret" }));

const loginUser = async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username: username });
  const hash = user.password;
  const isLoggedIn = await bcrypt.compare(password, hash);
  if (isLoggedIn) {
    req.session.user_id = user._id;
    res.send("you are logged in");
  } else {
    res.send("incorrect password or username");
  }
};

module.exports = loginUser;
