// Imports
const express = require("express");
const src = require("../exports.js");

// Variables
let r = express.Router();

// Routes
r.get("/", (req, res) => {
    res.status(200).send(src.load({
        c: [ "/css/home.css" ],
        j: [ "/js/home.js" ],
        s: src.read("public/html/home.html")
    }));
});

// Exports
module.exports = r;