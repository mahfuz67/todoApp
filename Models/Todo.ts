import mongoose from "mongoose";
import { ITodo } from "../interface";
const todoSchema = new mongoose.Schema<ITodo>({
  title: String,
  status: {
    type: String,
    default: "pending"
  },
});

const Todo = mongoose.model<ITodo, any, any>("Todo", todoSchema);

export { Todo };
