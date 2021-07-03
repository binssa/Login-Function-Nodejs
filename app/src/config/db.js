const mysql = require("mysql");

const db = mysql.createConnection({
    host: "",
    user: "admin",
    password: "",
    database: "",
});

db.connect();

module.exports = db;