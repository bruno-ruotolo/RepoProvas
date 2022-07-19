import { Router } from "express";

import { signInController, signUpController } from "../controllers/authController.js";
import { schemaValidator } from "../middlewares/schemaValidatorMiddleware.js";
import authSchema from "../schemas/authSchema.js";

const authRouter = Router();

authRouter.post("/sign-up", schemaValidator(authSchema.registerSchema), signUpController);
authRouter.post("/", schemaValidator(authSchema.loginSchema), signInController);

export default authRouter;