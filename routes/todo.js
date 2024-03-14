const express = require("express");
const createTodo = require("../controllers/todo/createTodo");
const showTodos = require("../controllers/todo/showTodos");
const deleteTodo = require("../controllers/todo/deleteTodo");
const showTodo = require("../controllers/todo/showTodo");
const updateTodo = require("../controllers/todo/updateTodo");

const routes = express.Router();

routes.post("/user/:id/todo", createTodo);
routes.get("/user/:id/todo", showTodos);
routes.delete("/todo/:id", deleteTodo);
routes.get("/todo/:id", showTodo);
routes.put("/todo/:id", updateTodo);

module.exports = routes;
