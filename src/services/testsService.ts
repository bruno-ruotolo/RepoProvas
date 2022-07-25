import { Category, TeacherDiscipline } from "@prisma/client";

import { TestCreateData } from "../interfaces/createDataInterface.js";
import testsRepository from "../repositories/testsRepository.js";
import { unprocessableEntityError } from "../utils/errorUtils.js";

//SERVICES
async function createTest(testData: TestCreateData) {
  const category = await testsRepository.getCategoryById(testData.categoryId);
  const teacherDiscipline = await testsRepository
    .getTeacherDisciplineById(testData.teacherDisciplineId);

  isCategoryOrTeacherDisciplineValid(category, teacherDiscipline)

  await testsRepository.create(testData);
};

async function getTestsByDisciplines() {
  const tests = await testsRepository.getTestsByDiscipline();

  return tests;
};

async function getTestsByTeachers() {
  const tests = await testsRepository.getTestsByTeachers();

  return tests;
};

async function getAllCategories() {
  const categories = await testsRepository.getAllCategories();

  return categories;
};

const testsService = {
  createTest,
  getTestsByDisciplines,
  getAllCategories,
  getTestsByTeachers
};


//AUXILIARY FUNCTIONS
function isCategoryOrTeacherDisciplineValid(category: Category, teacherDiscipline: TeacherDiscipline) {
  if (!category) throw unprocessableEntityError("This Category ID is Invalid");
  if (!teacherDiscipline) throw unprocessableEntityError("This TeacherDiscipline ID is Invalid");
};

export default testsService;
