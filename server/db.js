// Adiciona o pacote para fazer as consultas MySQL.
const mysql = require('mysql8');

// Configurando a conexão com o banco MySQL.
const dbCon = mysql.createConnection({
    host:"localhost",
    user:"qrcode",
    password:"senai115",
    database:"qrcode"
});

// Exportando a conexão do banco de dados.
module.exports = dbCon;
