const cors = require('cors')

module.exports = (server) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Methods", 'GET, PUT, POST, DELETE');

        server.use(cors());
        next();
    })
}