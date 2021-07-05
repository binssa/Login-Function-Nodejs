"use strict";

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

// Routing
const home = require("./src/routes/home");

// App Setting
app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(express.static(`${__dirname}/src/public`));
app.use(bodyParser.json());
// URL 인코딩
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", home); // Middleware Config

module.exports = app;
