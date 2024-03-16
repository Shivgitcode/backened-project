const User = require("../../schema/userShema");
const bcrypt = require("bcrypt");
const express = require("express");
const jwt = require("jsonwebtoken");
const registerUser = async (req, res) => {
  const { username, email, password } = req.body;
  const hashedPass = await bcrypt.hash(password, 12);
  const user = await User.create({
    username,
    email,
    password: hashedPass,
  });
  const token = jwt.sign({ id: user._id }, "thisistopsecret");
  res.cookie("jwt", token);
  res.send("user created");
};

module.exports = registerUser;
