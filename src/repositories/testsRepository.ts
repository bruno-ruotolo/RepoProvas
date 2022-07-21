import prisma from "../config/db.js";

import { TestCreateData } from "../interfaces/createDataInterface.js";

async function create(data: TestCreateData) {
  await prisma.test.create({ data });
};

const testsRepository = {
  create
};

export default testsRepository;