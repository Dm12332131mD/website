// Imports
const functions = {
    load: require("./functions/load.js"),
    log: require("./functions/log.js"),
    read: require("./functions/read.js")
};

// Exports
module.exports = {
    functions, ...functions
};