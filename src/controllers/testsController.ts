import { Request, Response } from "express";

import { TestCreateData } from "../interfaces/createDataInterface.js";
import testsService from "../services/testsService.js";

export async function createTestController(req: Request, res: Response) {
  const testData: TestCreateData = req.body;

  await testsService.createTestService(testData);

  return res.sendStatus(201);
};