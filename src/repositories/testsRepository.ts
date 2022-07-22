import prisma from "../config/db.js";

import { TestCreateData } from "../interfaces/createDataInterface.js";

async function create(data: TestCreateData) {
  await prisma.test.create({ data });
};

async function getTeacherDisciplineById(id: number) {
  return prisma.teacherDiscipline.findUnique({ where: { id } });
};

async function getCategoryById(id: number) {
  return prisma.category.findUnique({ where: { id } });
};

async function getAllCategories() {
  return prisma.category.findMany();
};

async function getTestsByDiscipline() {
  return await prisma.term.findMany(
    {
      select: {
        id: true,
        number: true,
        disciplines: {
          select: {
            id: true,
            name: true,
            teachersDisciplines: {
              select: {
                id: true,
                teacher: { select: { id: true, name: true } },
                tests: {
                  select: {
                    id: true,
                    name: true,
                    pdfUrl: true,
                    category: { select: { id: true, name: true } }
                  }
                }
              }
            }
          }
        }
      }
    }
  )
};


const testsRepository = {
  create,
  getTeacherDisciplineById,
  getCategoryById,
  getAllCategories,
  getTestsByDiscipline
};

export default testsRepository;