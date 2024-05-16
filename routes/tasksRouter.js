import express from "express";
import {
  // getAllContacts,
  // getOneContact,
  // deleteContact,
  createTask,
  // updateContact,
  // updateStatusContact,
} from "../controllers/tasksControllers.js";

const tasksRouter = express.Router();
// contactsRouter.get("/", getAllContacts);
// contactsRouter.get("/:id", getOneContact);
// contactsRouter.delete("/:id", deleteContact);
tasksRouter.post("/", createTask);
// contactsRouter.put("/:id", updateContact);
// contactsRouter.patch("/:id/favorite", updateStatusContact);

export default tasksRouter;
