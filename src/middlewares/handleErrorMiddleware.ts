import { NextFunction, Request, Response } from "express";
import chalk from "chalk";

import { AppError, errorStatusCodes, isAppError } from "../utils/errorUtils.js";

export async function handleErrors(error: Error | AppError, req: Request, res: Response, next: NextFunction) {

  console.log(chalk.redBright(`Something Went Wrong: `), error);

  if (isAppError(error)) {
    const statusCode = errorStatusCodes(error.type);
    return res.status(statusCode).send(error.message);
  };

  res.status(500).send(error);
};