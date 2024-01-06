import { BaseError } from "./base-error";

export class NotAuthException extends BaseError {
  statusCode = 401;
  constructor(message: string) {
    super(message);
  }
}
