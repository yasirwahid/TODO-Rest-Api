const bodyParser = require("body-parser");
const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");

const todoRouter = require("./routes/todo");

const app = express();

app.use(bodyParser.json());

app.use("/todo", todoRouter);

app.get("/", (req, res) => {
  res.send("My First todo rest api");
});

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useUnifiedTopology: true,
  },
  () => console.log("connected to database")
);

app.listen(3000);
