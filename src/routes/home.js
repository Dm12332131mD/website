"use strict";

// Imports\
const express = require("express");
const loadFile = require("../functions/loadFile.js");

// Variables
let router = express.Router();

// Executes
router.get("/", (request, response) => {
    response.status(200).send(loadFile("public/html/home.html"));
});

// Exports
module.exports = router;