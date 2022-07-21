import { faker } from '@faker-js/faker';

import prisma from "../../src/config/db.js";

function createBody(categoryId = 1, teacherDisciplineId = 1) {
  return {
    name: faker.internet.domainName(),
    pdfUrl: faker.internet.url(),
    categoryId,
    teacherDisciplineId
  }
};

const testsFactory = {
  createBody
};

export default testsFactory;