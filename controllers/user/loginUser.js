const User = require("../../schema/userShema");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const app = express();

const loginUser = async (req, res, next) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username: username });
    if (!user) {
      return res.status(404).json({
        message: "User not found",
        success: true,
      });
    }
    const { id } = user;
    const token = jwt.sign({ id }, "thisistopsecret");
    const hash = user.password;
    const isLoggedIn = await bcrypt.compare(password, hash);
    if (isLoggedIn) {
      res.cookie("jwt", token);
      res.status(200).json({
        data: token,
        message: "logged in successfully",
        success: true,
      });
    } else {
      res.status(401).json({
        message: "Incorrect password ",
      });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = loginUser;
