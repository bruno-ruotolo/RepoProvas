import { TestCreateData } from "../interfaces/createDataInterface";

import testsRepository from "../repositories/testsRepository.js";

async function createTestService(testData: TestCreateData) {
  await testsRepository.create(testData);
};

const testsService = {
  createTestService
};

export default testsService;
