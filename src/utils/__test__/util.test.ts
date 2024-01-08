import { describe, it, expect } from "@jest/globals";
import { generateCode, generateExpiresAt, generateHash } from "..";

describe("Utils Tests", () => {
  it("should return hashed password", async () => {
    const password = "123456";

    const result = await generateHash(password);

    expect(result).toHaveLength(60);
    expect(result).toContain("$");
    expect(result).not.toBe(password);
  });

  it("should return CODE ", () => {
    const result = generateCode();

    expect(result).toMatch("CODE");
    expect(result).toHaveLength(4);
  });

  it("should return after 5 minutes ", () => {
    const currentDateTime = new Date();

    const result = generateExpiresAt();

    const expectedDate = new Date(currentDateTime.getTime());
    expectedDate.setMinutes(expectedDate.getMinutes() + 5);

    expect(result).toEqual(expectedDate);
    expect(result).toBeInstanceOf(Date);
  });
});
