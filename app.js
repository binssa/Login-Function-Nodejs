const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("This is Root");
});

app.get("/login", (req, res) => {
    res.send("This is Login Page");
});

// Server 
app.listen(3000, function() {
    console.log("Server Start");
});