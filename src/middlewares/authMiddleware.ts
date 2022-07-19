import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

import authService from "../repositories/authRepository.js";
import { unauthorizedError } from "../utils/errorUtils.js";

export default async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const { authorization } = req.headers;
  if (!authorization) throw unauthorizedError("Authorization Header is Missing");

  const token = authorization.replace("Bearer", "").trim();
  if (!token) throw unauthorizedError("Token is Missing");

  const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
  const { userId } = jwt.verify(token, JWT_SECRET_KEY) as { userId: number };
  const user = await authService.findUserById(userId);
  if (!user) throw unauthorizedError("Token is Invalid");
  res.locals.user = user;
  next();
};