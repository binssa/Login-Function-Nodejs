"use strict";

const express = require("express");
const router = express.Router();

// Render HTML
router.get("/", (req, res) => {
    res.render("home/index");
});
router.get("/login", (req, res) => {
    res.render("home/login")
});

// Module Exports 
module.exports = router;