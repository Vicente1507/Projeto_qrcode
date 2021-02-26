const express = require('express');
const http = require('http')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({​​​​​ extended: true }​​​​​));
app.use(bodyParser.json());

const corsConfig = require('./corsConfig.js');
corsConfig(app);

const server = http.createServer(app);
server.listen(3000, '127.0.0.1');
console.log('O servidor está na porta 3000')