// Imports
const fs = require("fs");

/**
 * Reads a file
 * @param {string} f File directory 
 * @returns {string}
 */
function read(f) {
    if(!fs.existsSync(f)) throw new Error("File does not exist");
    return fs.readFileSync(f).toString();
};

// Exports
module.exports = read;