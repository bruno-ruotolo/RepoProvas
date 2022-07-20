import supertest from "supertest";

import app from "../src/app.js";

const EMAIL = 'testes@gmail.com';
const PASSWORD = '0123456789'
const register = {
  email: EMAIL,
  password: PASSWORD,
  confirmPassword: PASSWORD
};

describe("Auth /sign-up", () => {
  it("given a valid user it should return 201", async () => {

    const result = await supertest(app).post("/sign-up").send(register);
    const status = result.status;

    expect(status).toEqual(201);
  });
});