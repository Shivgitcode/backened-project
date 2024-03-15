const express = require("express");
const dbConnect = require("./database/db");
const dotenv = require("dotenv");
const app = express();
const todoRoutes = require("./routes/todo");
const userRoutes = require("./routes/user");
const session = require("express-session");

dotenv.config();
dbConnect();

const port = process.env.PORT;

app.use(express.json());
app.use(
  session({
    secret: "thisisnotagoodsecret",
    resave: true,
    saveUninitialized: true,
  })
);
app.use("/", todoRoutes);
app.use("/", userRoutes);

app.use((err, req, res, next) => {
  const { status = 500, message = "internal server error" } = err;
  res.status(status).send(message);
  next(err);
});

app.listen(port, () => {
  console.log(`Server starting at ${port}`);
});
