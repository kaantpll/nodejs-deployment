import mongoose from "mongoose";
import { Configurations } from "../config/index";

export const connectDatabase = async () => {
  try {
    await mongoose.connect(Configurations.DB_HOST, {});
    console.log("Db Connected");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};
