import { BaseError } from "./base-error";

export class NotFoundException extends BaseError {
  statusCode = 404;
  constructor(message: string) {
    super(message);
  }
}
