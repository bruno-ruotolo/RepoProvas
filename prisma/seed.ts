import { PrismaClient } from '@prisma/client';
import {
  TermCreateData,
  CategoryCreateData,
  TeacherCreateData,
  DisciplineCreateData,
  TeacherDisciplineCreateData
} from '../src/interfaces/createDataInterface.js';

const prisma = new PrismaClient()

async function main() {
  const terms: TermCreateData[] =
    [
      { number: 1 },
      { number: 2 },
      { number: 3 },
      { number: 4 },
      { number: 5 },
      { number: 6 }
    ];

  const categories: CategoryCreateData[] =
    [
      { name: "Projeto" },
      { name: "Prática" },
      { name: "Recuperação" }
    ];

  const teachers: TeacherCreateData[] =
    [
      { name: "Diego Pinho" },
      { name: "Bruna Hamori" }
    ];

  const disciplines: DisciplineCreateData[] =
    [
      { name: "HTML e CSS", termId: 1 },
      { name: "JavaScript", termId: 2 },
      { name: "React", termId: 3 },
      { name: "Humildade", termId: 4 },
      { name: "Planejamento", termId: 5 },
      { name: "Autoconfiança", termId: 6 }
    ];

  const teachersDisciplines: TeacherDisciplineCreateData[] = [
    { teacherId: 1, disciplineId: 1 },
    { teacherId: 1, disciplineId: 2 },
    { teacherId: 1, disciplineId: 3 },
    { teacherId: 2, disciplineId: 4 },
    { teacherId: 2, disciplineId: 5 },
    { teacherId: 2, disciplineId: 6 }
  ];

  await prisma.term.createMany({ data: terms });
  await prisma.category.createMany({ data: categories });
  await prisma.teacher.createMany({ data: teachers });
  await prisma.dicipline.createMany({ data: disciplines });
  await prisma.teacherDiscipline.createMany({ data: teachersDisciplines });
};

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });