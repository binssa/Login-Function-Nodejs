const express = require("express");
const app = express();

// App Setting
app.set("views", "./views");
app.set("view engine", "ejs");
 
// Render HTML
app.get("/", (req, res) => {
    res.render("home/index");
});
app.get("/login", (req, res) => {
    res.render("home/login")
});

// Server 
app.listen(3000, function() {
    console.log("Server Start");
});