"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

// Render HTML
router.get("/", ctrl.output.hello);
router.get("/login", ctrl.output.login);
router.get("/register", ctrl.output.register);
router.post("/login", ctrl.process.login);

// Module Exports 
module.exports = router;