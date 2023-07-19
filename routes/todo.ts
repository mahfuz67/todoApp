import { Router } from "express";
import { Todo } from "../Models/Todo";

const router = Router();
const path = "/todo";

router.get("/", async (req, res) => {
  res.json({ status: true, message: "Success", data: await Todo.find() });
});

router.post("/", async (req, res) => {
  try {
    let result: any;
    if (Array.isArray(req.body)) {
      const todos = req.body;
      result = await Todo.insertMany(todos);
    } else {
      const todo = req.body;
      const singleTodo = new Todo({
        title: todo.title,
      });
      result = await singleTodo.save();
    }

    if (result) {
      res.status(200).send({
        status: true,
        message: "Todo created successfully",
        data: result,
      });
    } else {
      res.status(500).send({ status: false, message: "Error Creating Todos" });
    }
  } catch (error) {
    res.status(500).send({ status: false, message: error });
  }
});

router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const todo = await Todo.findById(id);
    if (!todo) {
      res.status(404).send("Todo not found");
      return;
    }
    todo.status = req.body.status;
    todo.title = req.body.title;
    await todo.save();
    res.status(200).send({ status: true, message: "Success", data: todo });
  } catch (error) {
    res.status(500).send({ status: false, message: error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const result = await Todo.findByIdAndRemove(id);
    res.status(200).send({ status: true, message: "Success", data: result });
  } catch (error) {
    res.status(500).send({ status: false, message: error });
  }
});

export { router, path };
