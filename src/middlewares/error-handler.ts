import { BaseError } from "../../src/exceptions/base-error";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  if (err instanceof BaseError) {
    return res.status(err.statusCode).send({ errors: err.message });
  }

  res.status(400).send({
    errors: [{ message: "Something went wrong" }],
  });
};
