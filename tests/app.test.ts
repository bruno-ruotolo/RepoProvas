import app from "../src/app.js";
import prisma from "../src/config/db.js";
import supertest from "supertest";
import authFactory from "./factories/authFactory.js";
import testsFactory from "./factories/testsFactory.js";

beforeEach(async () => {
  await prisma.$executeRaw`TRUNCATE TABLE tests`;
  await prisma.$executeRaw`DELETE FROM users WHERE email = 'test@gmail.com'`;
});

//Auth Register
describe("Auth Register Suite", () => {
  it("given a valid user body it should return 201", async () => {
    const register = authFactory.createBody();
    const result = await supertest(app).post("/sign-up").send(register);
    const status = result.status;

    const user = await prisma.user.findUnique({ where: { email: register.email } });

    expect(user.email).toBe(register.email);
    expect(status).toEqual(201);
  });

  it("given a invalid user body it should return 422", async () => {
    const result = await supertest(app).post("/sign-up").send({ email: "test@gmail.com" });
    const status = result.status;

    expect(status).toEqual(422);
  });

  it("given a conflict user it should return 409", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const result = await supertest(app)
      .post("/sign-up")
      .send({ ...register, confirmPassword: register.password });

    const status = result.status;

    expect(status).toEqual(409);
  });
});

//Auth Login
describe("Auth Login Suite", () => {
  it("given a valid credentials it should return 200", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const result = await supertest(app).post("/").send(register);
    const status = result.status;
    const token = result.body.token;

    expect(token).not.toBeUndefined();
    expect(status).toBe(200);
  });

  it("given a invalid body it should return 422", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;

    const result = await supertest(app).post("/").send(register.email);
    const status = result.status;

    expect(status).toBe(422);
  });

  it("given a invalid credentials it should return 401", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;

    const result = await supertest(app).post("/").send({ ...register, password: "012345678910" });
    const status = result.status;

    expect(status).toBe(401);
  });
});

afterAll(async () => {
  await prisma.$disconnect();
});

//Tests Creation
describe("Tests Create Suite", () => {
  it("given a valid body it should return 201", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const login = await supertest(app).post("/").send(register);
    const token = login.body.token;

    const test = testsFactory.createBody()

    const result = await supertest(app)
      .post("/tests/create")
      .send(test)
      .set("Authorization", `Bearer ${token}`)
    const status = result.status;

    const user = await prisma.test.findFirst({ where: { name: test.name, pdfUrl: test.pdfUrl } });

    expect(user.name).toBe(test.name);
    expect(status).toBe(201);
  });

  it("given a invalid body it should return 422", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const login = await supertest(app).post("/").send(register);
    const token = login.body.token;

    const test = testsFactory.createBody()
    delete test.name;

    const result = await supertest(app)
      .post("/tests/create")
      .send(test)
      .set("Authorization", `Bearer ${token}`)
    const status = result.status;

    const user = await prisma.test.findFirst({ where: { name: test.name, pdfUrl: test.pdfUrl } });

    expect(user).toBeUndefined;
    expect(status).toBe(422);
  });

  it("given a invalid header token it should return 401", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const test = testsFactory.createBody()

    const result = await supertest(app)
      .post("/tests/create")
      .send(test)
    const status = result.status;

    const user = await prisma.test.findFirst({ where: { name: test.name, pdfUrl: test.pdfUrl } });

    expect(user).toBeUndefined;
    expect(status).toBe(401);
  });

  it("given a invalid categoryId it should return 422", async () => {
    const INVALID_ID = 100000000000;
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const login = await supertest(app).post("/").send(register);
    const token = login.body.token;

    const test = testsFactory.createBody()

    const result = await supertest(app)
      .post("/tests/create")
      .send({ ...test, categoryId: INVALID_ID })
      .set("Authorization", `Bearer ${token}`)
    const status = result.status;

    const user = await prisma.test.findFirst({ where: { name: test.name, pdfUrl: test.pdfUrl } });

    expect(user).toBeUndefined;
    expect(status).toBe(422);
  });

  it("given a invalid teacherDisciplineId it should return 422", async () => {
    const INVALID_ID = 100000000000;
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const login = await supertest(app).post("/").send(register);
    const token = login.body.token;

    const test = testsFactory.createBody()

    const result = await supertest(app)
      .post("/tests/create")
      .send({ ...test, teacherDisciplineId: INVALID_ID })
      .set("Authorization", `Bearer ${token}`)
    const status = result.status;

    const user = await prisma.test.findFirst({ where: { name: test.name, pdfUrl: test.pdfUrl } });

    expect(user).toBeUndefined;
    expect(status).toBe(422);
  });

  //Test Get By Discipline 
  it("given a valid header it should return 200 and the tests", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const login = await supertest(app).post("/").send(register);
    const token = login.body.token;

    const result = await supertest(app)
      .get("/tests/disciplines")
      .set("Authorization", `Bearer ${token}`)
    const status = result.status;

    expect(result).not.toBeNull;
    expect(result).not.toBeUndefined;
    expect(status).toBe(200);

  });

  it("given a invalid header it should return 401", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const result = await supertest(app).get("/tests/disciplines")
    const status = result.status;

    expect(result).toBeNull;
    expect(status).toBe(401);
  });

});


describe("Categories Tests Suite", () => {
  it("given a valid header it should return 200 and all the categories", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const login = await supertest(app).post("/").send(register);
    const token = login.body.token;

    const result = await supertest(app)
      .get("/tests/categories")
      .set("Authorization", `Bearer ${token}`)
    const status = result.status;

    expect(result).not.toBeNull;
    expect(result).not.toBeUndefined;
    expect(status).toBe(200);
  });

  it("given a invalid header it should return 401", async () => {
    const register = authFactory.createBody();
    delete register.confirmPassword;
    await authFactory.createUser(register);

    const result = await supertest(app).get("/tests/categories")
    const status = result.status;

    expect(result).toBeNull;
    expect(status).toBe(401);
  });
})