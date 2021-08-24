// Imports
const config = require("./config.json");
const express = require("express");
const src = require("./public/src/exports.js");

// Variables
let app = express();

// Middlewares
app.use("/", require("./public/src/routes/index.js"));

// Listens
app.listen(config.port, () => {
    console.clear();
    src.log("init", config);
});