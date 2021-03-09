const dbCon = require('../db.js');

module.exports = (req, res, next) => {
    try{
        const {nome, descricao} = req.body;

        if(!nome || !descricao){
            const erro = JSON.stringify({ cod: 400, mensagem: 'Dados incompletos!' });
            throw new Error(erro);
        }

        dbCon.query(`INSERT INTO maquina (id, nome, descricao) VALUES (null, '${nome})', '${descricao}')`,

        (erroMaquinas, resMaquina) => {

            if (erroMaquinas){
                const erro = JSON.stringify({ cod: 502, mensagem:'Erro ao inserir dados na tabela maquinas!' });
                throw new Error(erro);
            }

            res.status(201).send({ status: "Sucesso", mensagem: "Dados adicionados com sucesso!" });
        });

    }catch ({ message }) {
        const { cod, mensagem} = JSON.parse(message)
        res.status(cod).send({ status:'Falha', mensagem });
    }
}