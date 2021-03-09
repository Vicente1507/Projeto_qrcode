const express = require('express');
const http = require('http')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());


const multer = require('multer')

const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, './uploads')
    },
    filename(req, file, cb) {
        cb(null, `${new Date().toISOString().replace(/:/g, '-')}-${file.originalname}`)
    }
});

const upload = multer({storage})


const corsConfig = require('./corsConfig.js');
const { urlencoded } = require('body-parser');
corsConfig(app);

const dbCon = require('./db.js');
dbCon.connect();

const maquinasGet = require('./api/maquinas_get.js')
const maquinasPost = require('./api/maquinas_post.js')
const maquinasDelete = require('./api/maquinas_delete.js')

app.use('/uploads', express.static('uploads'));

app.get('/maquinas', maquinasGet);

app.post('/maquinas', upload.array('imagens'), maquinasPost);

app.delete('/maquinas/:id', maquinasDelete)

const server = http.createServer(app);
server.listen(3000, '127.0.0.1');
console.log('O servidor está na porta 3000')