const express = require("express");
const createTodo = require("../controllers/todo/createTodo");
const showTodos = require("../controllers/todo/showTodos");
const deleteTodo = require("../controllers/todo/deleteTodo");
const showTodo = require("../controllers/todo/showTodo");
const updateTodo = require("../controllers/todo/updateTodo");
const { checkLoggedIn, checkUser } = require("../middelware");

const routes = express.Router();

routes.post("/todo", checkLoggedIn, checkUser, createTodo);
routes.get("/todo", checkLoggedIn, checkUser, showTodos);
routes.delete("/todo/:id", deleteTodo);
routes.get("/todo/:id", checkLoggedIn, checkUser, showTodo);
routes.put("/todo/:id", checkLoggedIn, checkUser, updateTodo);
routes.get("/home", (req, res) => {
  res.send("Home page");
});

module.exports = routes;
