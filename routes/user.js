const express = require("express");
const registerUser = require("../controllers/user/registerUser");
const routes = express.Router();

routes.post("/register", registerUser);

module.exports = routes;
