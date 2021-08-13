// Imports
const config = require("./config.json");
const express = require("express");

// Variables
let app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }))

// Listens
app.listen(config.port, () => {
    console.log(`App is now online!`);
});