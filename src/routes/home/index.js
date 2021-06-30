"use strict";

const express = require("express");
const router = express.Router();

const ctrl = require("./home.ctrl")

// Render HTML
router.get("/", ctrl.hello);
router.get("/login", ctrl.login);

// Module Exports 
module.exports = router;