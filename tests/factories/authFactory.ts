import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';

import prisma from "../../src/config/db.js";
import supertest from "supertest";
import app from "../../src/app.js";

const EMAIL = 'test@gmail.com'

interface Register {
  email: string;
  password: string;
  confirmaPassword?: string
}

function createBody(email = EMAIL, passwordLength = 10) {
  const passwordRandom = faker.internet.password(passwordLength);
  return {
    email,
    password: passwordRandom,
    confirmPassword: passwordRandom
  }
};

async function createUser(body: Register) {
  const SALT = 12;
  const user = await prisma.user.create({
    data: {
      email: body.email,
      password: bcrypt.hashSync(body.password, SALT)
    }
  });
  return user;
};

async function loginAndReturnToken() {
  const registerBody = createBody();
  delete registerBody.confirmPassword;
  await createUser(registerBody);

  const login = await supertest(app).post("/").send(registerBody);
  const token = login.body.token;
  return token;
};

const authFactory = {
  createBody,
  createUser,
  loginAndReturnToken
};

export default authFactory;