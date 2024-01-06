import {
  describe,
  it,
  expect,
  beforeEach,
  afterEach,
  test,
} from "@jest/globals";
import { BaseError } from "../base-error";
import { NotFoundException } from "../not-found";
import { NotAuthException } from "../not-authorized-error";

describe("Exceptions Tests", () => {
  const ERRORS = {
    NOT_FOUND: "Not Found",
    NOT_AUTH: "Not Auth",
  };
  it("should return 404  and exception should  inherit baseError ", () => {
    const error = new NotFoundException(ERRORS.NOT_FOUND);

    expect(error instanceof BaseError).toBeTruthy();
    expect(error.message).toBe(ERRORS.NOT_FOUND);
    expect(error.statusCode).toBe(404);
  });

  it("should return 400 and exception should  inherit baseError ", () => {
    const error = new NotAuthException(ERRORS.NOT_AUTH);

    expect(error instanceof BaseError).toBeTruthy();
    expect(error.message).toBe(ERRORS.NOT_AUTH);
    expect(error.statusCode).toBe(401);
  });
});
