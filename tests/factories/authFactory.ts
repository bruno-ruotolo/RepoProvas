import bcrypt from "bcrypt";
import { faker } from '@faker-js/faker';

import prisma from "../../src/config/db.js";

interface Register {
  email: string;
  password: string;
  confirmaPassword?: string
}

function createBody(email = "test@gmail.com", passwordLength = 10) {
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

const authFactory = {
  createBody,
  createUser
};

export default authFactory;