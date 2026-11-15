import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.CONNECTION_STRING}/${DB_NAME}`
    );
    console.log(`\n MongoDB connected!\n Host Name: ${connectionInstance.connection.host}`);
  } catch (err) {
    console.error("Error: ", err);
    process.exit(1);
  }
};

export default connectDB;