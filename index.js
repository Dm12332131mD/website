"use strict";

// Imports
const chalk = require("chalk");
const dotenv = require("dotenv");
const express = require("express");

// Variables
let app = express();

// Executes
dotenv.config();
app.use("/", require("./src/routes/index.js"));
app.listen(+process.env.PORT, () => {
    console.log(chalk.green(`Listening on port ${process.env.PORT}`));
});