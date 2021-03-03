const mysql = require('mysql8');

const dbCon = mysql.createConnection({
    host:"localhost",
    user:"qrcode",
    password:"senai115",
    database:"qrcode"
});

module.exports = dbCon;
