import express, { json } from "express";
import "express-async-errors";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
dotenv.config();

import router from "./services/index.js";
import { handleErrors } from "./middlewares/handleErrorMiddleware.js";

const app = express();
app.use(json());
app.use(cors());

app.use(router);
app.use(handleErrors);

const PORT = +process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.green.bold(`Server is Up on Port: ${PORT}`));
});
