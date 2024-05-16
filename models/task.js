import { Schema, model } from "mongoose";
import "dotenv/config";

const taskSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
    workingHours: {
      type: String,
    },
    date: {
      type: String,
    },
    time: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

const Task = model("task", taskSchema);

export default Task;
