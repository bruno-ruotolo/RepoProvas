import { Term, Category, Dicipline, Teacher, TeacherDiscipline, Test, User } from "@prisma/client";

export type TermCreateData = Omit<Term, "id">;
export type CategoryCreateData = Omit<Category, "id">;
export type DisciplineCreateData = Omit<Dicipline, "id">;
export type TeacherCreateData = Omit<Teacher, "id">;
export type TeacherDisciplineCreateData = Omit<TeacherDiscipline, "id">;
export type TestCreateData = Omit<Test, "id">;
export type UserCreateData = Omit<User, "id">;
