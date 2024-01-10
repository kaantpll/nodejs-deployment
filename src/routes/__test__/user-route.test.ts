import { UserModel } from "../../database/model/user";
import request from "supertest";

import { app } from "../../app";
describe("User Route Test", () => {
  it("GET /api/v1/users  should return all users", async () => {
    const mockUsers = [
      { name: "User1", email: "user1@email.com" },
      { name: "User2", email: "user2@email.com" },
    ];

    (UserModel as any).find = jest.fn().mockResolvedValue(mockUsers);

    const response = await request(app).get("/api/v1/users");

    expect(response.status).toBe(200);
    expect(response.body).toEqual(mockUsers);
    expect(response.body).toBeTruthy();
  });
});
