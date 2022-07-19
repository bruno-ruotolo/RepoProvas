import Joi from "joi";
import { RegisterCreateData, UserCreateData } from "../interfaces/createDataInterface";

const registerSchema = Joi.object<RegisterCreateData>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
  confirmPassword: Joi.string().min(10).required()
});

const loginSchema = Joi.object<UserCreateData & { confirmPassword?: String }>({
  email: Joi.string().email().required(),
  password: Joi.string().min(10).required(),
  confirmPassword: Joi.ref('password')
});

const authSchema = {
  registerSchema,
  loginSchema
};
export default authSchema;