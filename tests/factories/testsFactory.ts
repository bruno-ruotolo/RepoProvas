import { faker } from '@faker-js/faker';

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