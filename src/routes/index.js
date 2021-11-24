"use strict";

// Imports\
const express = require("express");
const loadFile = require("../functions/loadFile.js");

// Variables
let router = express.Router();

// Executes
router.use(express.json());
router.use(express.urlencoded({ extended: false }));
router.use(express.static("public/"));
router.use((request, response, next) => {
    next();
});
router.use("/", require("./home.js"));
router.use((request, response) => {
    response.status(404).send(loadFile("public/html/404.html"));
});

// Exports
module.exports = router;