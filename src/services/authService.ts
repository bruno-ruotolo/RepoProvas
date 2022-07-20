import { User } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

import { RegisterCreateData, UserCreateData } from "../interfaces/createDataInterface.js";
import authRepository from "../repositories/authRepository.js";
import { conflictError, unauthorizedError, unprocessableEntityError } from "../utils/errorUtils.js";

export async function signUpService(userData: RegisterCreateData) {
  const { password, email, confirmPassword } = userData;

  await isPasswordsEqual(password, confirmPassword);
  delete userData.confirmPassword;
  await isEmailConfliting(email);
  const passwordHash = await encryptPassword(password);

  await authRepository.create({ ...userData, password: passwordHash });
};

export async function signInService(userData: UserCreateData) {
  const { password, email } = userData;

  const user = await isEmailValid(email);
  await decryptPasswordAndValidate(password, user.password);
  const token = await generateJWTToken(user);

  return token;
};

async function isPasswordsEqual(password: string, confirmPassword: string) {
  if (password !== confirmPassword) throw unprocessableEntityError("Passwords are Diferents");
};

async function isEmailConfliting(email: string) {
  const user = await authRepository.findUserByEmail(email);
  if (user) throw conflictError("This email is unavailable");
};

async function isEmailValid(email: string) {
  const user = await authRepository.findUserByEmail(email);
  if (!user) throw unauthorizedError("Email/Password invalid");
  return user;
};

async function encryptPassword(password: string) {
  const SALT = 10;
  const passwordHash = bcrypt.hashSync(password, SALT);
  return passwordHash;
};

async function decryptPasswordAndValidate(password: string, passwordHashed: string) {
  const isValid = bcrypt.compareSync(password, passwordHashed);
  if (!isValid) throw unauthorizedError("Email/Password invalid");
};

async function generateJWTToken(user: User) {
  const { id, email } = user;
  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
  const EXPIRATION_DATE = { expiresIn: "7d" };

  const token = jwt.sign({ id, email }, JWT_SECRET_KEY, EXPIRATION_DATE);
  return token;
};