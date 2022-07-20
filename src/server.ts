import dotenv from "dotenv";
dotenv.config();
import chalk from "chalk";

import app from "./app.js";

const PORT = +process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(chalk.green.bold(`Server is Up on Port: ${PORT}`));
});
