const express = require("express");
const { Mongoose } = require("mongoose");
const TodoSchema = require("../models/TodoSchema");

const router = express.Router();

router.post("/", async (req, res) => {
  console.log("add todo", req.body);
  let todo = new TodoSchema({
    title: req.body.title,
    description: req.body.description,
  });
  try {
    let response = await todo.save();
    console.log("response", response);
    res.status(200).json(response);
  } catch (e) {
    res.status(201).json({ message: e });
    // console.log("Error", e);
  }
});

router.patch("/:postId", async (req, res) => {
  try {
    let response = await TodoSchema.updateOne(
      { _id: req.params.postId },
      {
        $set: { title: req.body.title },
      }
    );
    res.status(200).json(response);
  } catch (e) {
    res.status(201).json({ message: e });
  }
});

router.delete("/:postId", async (req, res) => {
  try {
    let response = await TodoSchema.remove({ _id: req.params.postId });

    res.status(200).json(response);
  } catch (e) {
    res.status(201).json({ message: e });
  }
});

router.get("/", async (req, res) => {
  console.log("get todo", req.body);

  try {
    let response = await TodoSchema.find();
    res.status(200).json(response);
  } catch (e) {
    res.status(201).json({ message: e });
  }
});

module.exports = router;
