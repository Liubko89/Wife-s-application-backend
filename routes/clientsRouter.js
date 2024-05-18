import express from "express";
import {
  getAllClients,
  getOneClient,
  deleteClient,
  createClient,
  updateClient,
} from "../controllers/clientsControllers.js";

const clientsRouter = express.Router();
clientsRouter.get("/", getAllClients);
clientsRouter.get("/:id", getOneClient);
clientsRouter.delete("/:id", deleteClient);
clientsRouter.post("/", createClient);
clientsRouter.put("/:id", updateClient);

export default clientsRouter;
