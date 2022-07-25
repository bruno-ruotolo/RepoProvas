import Joi from "joi";
import { TestCreateData } from "../interfaces/createDataInterface.js";

const testSchema = Joi.object<TestCreateData>({
  name: Joi.string().required(),
  pdfUrl: Joi.string().required(),
  categoryId: Joi.number().required(),
  teacherDisciplineId: Joi.number().required()
});

export default testSchema;