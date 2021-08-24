// Imports
const { dpaint } = require("dmmd.js");

/**
 * Logs content into console
 * @param {string} t Type
 * @param {{}} d Data
 */
function log(t, d) {
    let c = (m, ct) => {
        let a = Array.isArray(ct) ? ct : [ ct ];
        switch(m) {
            case "error": return a.map(dpaint.trueRed);
            case "warn": return a.map(dpaint.trueYellow);
            case "log": return a.map(dpaint.trueGreen);
            case "system": return a.map(dpaint.trueCyan);
            case "special": return a.map(dpaint.orange);
        };
    };
    let l = ct => console.log(Array.isArray(ct) ? ct.join(dpaint.trueWhite(" | ")) : ct);
    switch(t) {
        case "init": {
            l(c("system", [
                "Application Online",
                `Port: ${d.port}`
            ]));
            break;
        };
        case "request": {
            l(c("log", [
                "New Request",
                `URL: ${d.req.hostname}${d.req.originalUrl}`,
                `Date: ${new Date().toLocaleString()}`
            ]));
            break;
        };
    };
};

// Exports
module.exports = log;