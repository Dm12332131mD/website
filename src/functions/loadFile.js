"use strict";

// Imports
const fs = require("fs");

// Function
function loadFile(filePath) {
    if(!fs.existsSync(filePath)) throw new Error("File does not exist");
    return fs.readFileSync(filePath).toString();
};

// Exports
module.exports = loadFile;