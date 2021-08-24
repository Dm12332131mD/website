// Imports
const { Router } = require("express");
const path = require("path");

// Variables
let router = Router();

// Routes
router.get("/", (req, res) => {
    res.status(200).sendFile(path.join(__dirname, "../html/more/more.html"));
});

// Exports
module.exports = router;