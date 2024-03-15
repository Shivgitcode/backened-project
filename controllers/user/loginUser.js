const User = require("../../schema/userShema");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    const { id } = user;
    const token = jwt.sign({ id }, "thisistopsecret");
    const hash = user.password;
    const isLoggedIn = await bcrypt.compare(password, hash);
    if (isLoggedIn) {
      res.cookie("jwt", token);
      res.send("you are logged in");
    } else {
      res.send("incorrect password or username");
    }
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
