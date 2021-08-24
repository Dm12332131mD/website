// Imports
const express = require("express");
const src = require("../exports.js");

// Variables
let r = express.Router();

// Routes
r.get("/", (req, res) => {
    res.status(200).send(src.load({
        c: [ "/css/projects.css" ],
        j: [],
        s: src.read("public/html/projects.html")
    }));
});

// Exports
module.exports = r;