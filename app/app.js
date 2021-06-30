"use strict";

const express = require("express");
const app = express();

// Routing
const home = require("./src/routes/home")

// App Setting
app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use("/", home); // Middleware Config

module.exports = app;
