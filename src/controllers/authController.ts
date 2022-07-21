import { Request, Response } from "express";

import { RegisterCreateData, UserCreateData } from "../interfaces/createDataInterface.js";
import authService from "../services/authService.js";

export async function signUpController(req: Request, res: Response) {
  const userData: RegisterCreateData = req.body;

  await authService.signUpService(userData);

  res.sendStatus(201);
};

export async function signInController(req: Request, res: Response) {
  const userData: UserCreateData = req.body;

  const token = await authService.signInService(userData);

  res.status(200).send({ token });
};