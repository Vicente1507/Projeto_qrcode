module.exports = (req, res, next) => {
    res.status(201).send({
        mensagem: "Post funcionou"
    });
}