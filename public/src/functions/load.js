// Imports
const ejs = require("ejs");
const read = require("./read.js");

/**
 * Loads html from template
 * @param {{
 *     c: string[],
 *     j: string[],
 *     ...d: any
 * }} d Data
 * @param {{}} o Options
 * @returns {string}
 */
function load({ c, j, s, ...d }, o) {
    if([ c, j ].some(v => !Array.isArray(v))) throw new TypeError("Argument is not an array");
    if(typeof s !== "string") throw new TypeError("Argument is not a string");
    return ejs.render(read("public/html/index.html"), {
        c: c.map(f => `<link href=${f} rel="stylesheet" type="text/css">`).join("\n"),
        j: j.map(f => `<script src=${f}></script>`).join("\n"),
        s, ...d
    }, o ?? {});
};

// Exports
module.exports = load;