import { Router } from "express";

import { createTestController, getAllCategoriesController, getTestsBySubjectsController, getTestsByTeachersController } from "../controllers/testsController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import testSchema from "../schemas/testsSchema.js";


const testRouter = Router();

testRouter.post("/tests/create", schemaValidator(testSchema), authMiddleware, createTestController);
testRouter.get("/tests/disciplines", authMiddleware, getTestsBySubjectsController);
testRouter.get("/tests/teachers", authMiddleware, getTestsByTeachersController);
testRouter.get("/tests/categories", authMiddleware, getAllCategoriesController);

export default testRouter;