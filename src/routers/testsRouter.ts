import { Router } from "express";

import { createTestController } from "../controllers/testsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import testSchema from "../schemas/testsSchema.js";


const testRouter = Router();

testRouter.post("/tests/create", schemaValidator(testSchema), authMiddleware, createTestController);

export default testRouter;