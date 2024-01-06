import { errorHandler } from "./middlewares/error-handler";
import { userRouter } from "./routes/user-routes";
import express from "express";
import bodyParser from "body-parser";

const app = express();

app.use(express.json({ limit: "1mb" }));

app.use(bodyParser.json());
app.use(userRouter);

app.use(errorHandler);

export { app };
