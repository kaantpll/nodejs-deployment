import express, { Request, Response } from "express";
import { UserModel } from "../../src/database/model/user";
import { generateCode, generateExpiresAt, generateHash } from "../../src/utils";

const router = express.Router();

router.get("/api/v1/users", async (req: Request, res: Response) => {
  const users = await UserModel.find();

  res.status(200).send(users);
});

router.post("/api/v1/users", async (req: Request, res: Response) => {
  const { body } = req;

  const model = new UserModel({
    ...body,
    password: await generateHash(body.password),
  });

  await model.save();

  res.status(201).send({ success: true });
});

router.post(
  "/api/v1/send-confirm-code",
  async (req: Request, res: Response) => {
    // bind aws and send code by aws ses
    const { email } = req.body;

    await UserModel.findOneAndUpdate(
      { email },
      { confirmKey: generateCode(), confirmExpiresAt: generateExpiresAt() },
    );

    res.status(200).send({ success: true });
  },
);

router.post("/api/v1/confirm-user", async (req: Request, res: Response) => {
  const { email, confirmKey } = req.body;

  const user = await UserModel.findOne({
    email,
    confirmKey,
    confirmExpiresAt: { $gt: new Date() },
  });

  if (!user) {
    throw new Error("Error message");
  }

  res.status(200).send({ success: true });
});

export { router as userRouter };
