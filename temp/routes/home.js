// Imports
const { Router } = require("express");
const path = require("path");

// Variables
let router = Router();

// Routes
router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../html/home/home.html"));
});
router.get("/home", (req, res) => {
    res.status(200).redirect("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
});
router.get("/contact", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../html/home/contact.html"));
});
router.get("/terms", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../html/home/terms.html"));
});
router.get("/privacy", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../html/home/privacy.html"));
});

// Exports
module.exports = router;