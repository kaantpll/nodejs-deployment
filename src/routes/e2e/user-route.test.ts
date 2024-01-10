import request from "supertest";
import mongoose from "mongoose";
import { app } from "../../app";
import { Configurations } from "../../config";

describe("Users Test", () => {
  beforeAll(() => {
    mongoose
      .connect(Configurations.DB_HOST)
      .then(() => console.log("Connected to Test Database"))
      .catch((err) => console.log(`Error: ${err}`));
  });

  it("should return list of users", async () => {
    const response = await request(app).get("/api/v1/users");

    expect(response.status).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  afterAll(async () => {
    await mongoose.connection.close();
  });
});
