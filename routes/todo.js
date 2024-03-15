const express = require("express");
const createTodo = require("../controllers/todo/createTodo");
const showTodos = require("../controllers/todo/showTodos");
const deleteTodo = require("../controllers/todo/deleteTodo");
const showTodo = require("../controllers/todo/showTodo");
const updateTodo = require("../controllers/todo/updateTodo");
const checkLoggedIn = require("../middelware");

const routes = express.Router();

routes.post("/todo", checkLoggedIn, createTodo);
routes.get("/todo", checkLoggedIn, showTodos);
routes.delete("/todo/:id", deleteTodo);
routes.get("/todo/:id", checkLoggedIn, showTodo);
routes.put("/todo/:id", checkLoggedIn, updateTodo);
routes.get("/home", (req, res) => {
  res.send("Home page");
});

module.exports = routes;
