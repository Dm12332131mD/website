// Imports
const express = require("express");
const src = require("../exports.js");

// Variables
let r = express.Router();

// Middlewares
r.use(express.json());
r.use(express.urlencoded({ extended: false }));
r.use(express.static("public/"));
r.use((req, res, next) => {
    src.log("request", { req, res });
    next();
});

// Routes
r.use("/", require("./home.js"));
// r.use("/api", require("./api.js"));
r.use("/projects", require("./projects.js"));
// r.use("/more", require("./more.js"));
r.use((req, res) => res.status(404).send(src.load({
    c: [ "/css/404.css" ],
    j: [],
    s: src.read("public/html/404.html")
})));

// Exports
module.exports = r;