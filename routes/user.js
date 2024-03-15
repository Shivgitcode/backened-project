const express = require("express");
const registerUser = require("../controllers/user/registerUser");
const loginUser = require("../controllers/user/loginUser");
const checkLoggedIn = require("../middelware");
const logoutUser = require("../controllers/user/logoutUser");
const routes = express.Router();

routes.post("/register", registerUser);
routes.post("/login", loginUser);
routes.post("/logout", logoutUser);

module.exports = routes;
