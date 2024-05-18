import express from "express";
import {
  getAllTasks,
  getOneTask,
  deleteTask,
  createTask,
  updateTask,
  // updateStatusTask,
} from "../controllers/tasksControllers.js";

const tasksRouter = express.Router();
tasksRouter.get("/", getAllTasks);
tasksRouter.get("/:id", getOneTask);
tasksRouter.delete("/:id", deleteTask);
tasksRouter.post("/", createTask);
tasksRouter.put("/:id", updateTask);
// contactsRouter.patch("/:id/favorite", updateStatusTask);

export default tasksRouter;
