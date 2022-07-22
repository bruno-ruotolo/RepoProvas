import { Request, Response } from "express";

import { TestCreateData } from "../interfaces/createDataInterface.js";
import testsService from "../services/testsService.js";

export async function createTestController(req: Request, res: Response) {
  const testData: TestCreateData = req.body;

  await testsService.createTest(testData);

  return res.sendStatus(201);
};

export async function getTestsBySubjectsController(req: Request, res: Response) {
  const tests = await testsService.getTestsByDisciplines();

  return res.status(200).send(tests);
};

export async function getAllCategoriesController(req: Request, res: Response) {
  const tests = await testsService.getAllCategories();

  return res.status(200).send(tests);
};