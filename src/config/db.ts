import mongoose from "mongoose";
import { config } from "./config";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected successfully to db");
    });
    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to db", err);
    });
    await mongoose.connect(config.dbUrl as string);
  } catch (error) {
    console.error("Failed to connect to db", error);
    process.exit(1);
  }
};

export default connectDB;
