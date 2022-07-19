import prisma from "../config/db.js";
import { RegisterCreateData, UserCreateData } from "../interfaces/createDataInterface.js";

export async function findUserByEmail(email: string) {
  return await prisma.user.findUnique({ where: { email } });
};

export async function create(data: UserCreateData | RegisterCreateData) {
  await prisma.user.create({ data });
};

export async function findUserById(id: number) {
  return "Here Will Return the User"
};

const authRepository = {
  findUserById,
  findUserByEmail,
  create
};

export default authRepository;