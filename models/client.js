import { Schema, model } from "mongoose";
import "dotenv/config";

const clientSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for contact"],
    },
  },
  { versionKey: false, timestamps: true }
);

const Client = model("client", clientSchema);

export default Client;
