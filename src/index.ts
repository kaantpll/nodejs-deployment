import express from "express";
import { Configurations } from "./config";
import bodyParser from "body-parser";
import { connectDatabase } from "./database/connection";
import { errorHandler } from "./middlewares/error-handler";

const bootstrapServer = async () => {
  const app = express();

  app.use(express.json({ limit: "1mb" }));
  app.use(bodyParser.json());

  await connectDatabase();

  //controllers

  app.use(errorHandler);

  app.listen(Configurations.PORT, () => {
    console.log("Listening on 4000!");
  });
};

bootstrapServer();
