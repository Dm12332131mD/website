// Imports
const config = require("./config.json");
const express = require("express");
const path = require("path");

// Variables
let app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "/public/")));
app.use("/", require("./public/routes/base.js"));
app.use((req, res) => res.sendFile(path.join(__dirname, "./public/html/404.html")));

// Listens
app.listen(config.port, () => {
    console.clear();
    console.log(`App is now online!`);
});