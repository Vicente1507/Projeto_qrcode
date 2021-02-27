// Adicionando o pacote que resolve o problema de cors da API.
const cors = require('cors')

module.exports = (app) => {
    // Resolvendo o problema de cors no site
    app.use((req, res, next) => {
        // Qual site tem permissão de realizar a conexão com o site
        // O "*" define que qualquer site tem pode usar a API.
        res.header("Access-Control-Allow-Origin", "*");
        // Métodos que a conexão pode realizar na API.
        res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');

        app.use(cors());
        next();
    })
}