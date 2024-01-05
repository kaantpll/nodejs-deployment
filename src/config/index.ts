import dotenv from "dotenv";

dotenv.config({ path: "./.env" });

export const Configurations = {
  PORT: process.env.PORT || 3000,
  DB_HOST: process.env.DB_HOST || "",
};
