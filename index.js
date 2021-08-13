// Imports
const config = require("./config.json");
const express = require("express");
const fs = require("fs");
const path = require("path");

// Variables
let app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public/")));
app.use("/", require("./public/routes/base.js"));

// Listens
app.listen(config.port, () => {
    console.clear();
    console.log(`App is now online!`);
});