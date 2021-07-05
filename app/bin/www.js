"use strict"

const app = require("../app");
const PORT = process.env.PORT || 3000;

// Server 
app.listen(PORT, () => {
    console.log("Server Start");
});