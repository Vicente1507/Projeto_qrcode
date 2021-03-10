// Biblioteca para criar o servidor.
const http = require('http');
const express = require('express');

// Criando instância do express para construir o servidor.
const app = express();

// Habilitando formas adicionais para receber dados.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Configurando multer para uploads.
const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads')
    },
    filename(req, file, cb) {
        cb(null, `${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`)
    }
});

const upload = multer({ storage });

// Desabilitando o CORS para ter acesso a API.
const corsConfig = require('./corsConfig.js');
corsConfig(app);

// Criando a conexão com o banco de dados.
const dbCon = require('./db.js');
dbCon.connect();

// Rotas para CRUD.
const maquinasGet = require('./api/maquinas_get.js');
app.get('/maquinas', maquinasGet);

// Configurando rota para buscar arquivos estáticos.
app.use('/uploads', express.static('uploads'));

const maquinasPost = require('./api/maquinas_post.js');
app.post('/maquinas', upload.array('imagens'), maquinasPost);

const maquinasDelete = require('./api/maquinas_delete.js');
app.delete('/maquinas/:id', maquinasDelete);

// Criando servidor.
const server = http.createServer(app);
server.listen(3000, '127.0.0.1');
console.log('O servidor está na porta 3000');
