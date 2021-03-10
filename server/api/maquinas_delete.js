const { unlink } = require('fs');
const dbCon = require('../db.js');

module.exports = (req, res) => {
    try {
        const id = req.params.id;
        const  { midias } = req.body;

        if (!id || !midias?.length > 0) {
            const erro = JSON.stringify({ cod: 400, mensagem: "Dados incompletos!" });
            throw new Error(erro);
        }

        dbCon.query(`DELETE FROM maquina WHERE id = ${id}`, (erroMaquina) => {
            if (erroMaquina) {
                const erro = JSON.stringify({ cod: 502, mensagem: "Erro ao deletar maquina no banco de dados!" });
                throw new Error(erro);
            }

            midias.forEach(({ caminho }) => {
                unlink(caminho, () => {});
            });

            dbCon.query(`DELETE FROM midias WHERE maquina_id = ${id}`, (erroMidias) => {
                if (erroMidias) {
                    const erro = JSON.stringify({ cod: 502, mensagem: "Erro ao deletar mídias no banco de dados!" });
                    throw new Error(erro);
                }
        
                res.status(201).send({ status: "Sucesso", mensagem: "Dados removidos!" });
            });
        });
    } catch (erro) {
        const objErro = JSON.parse(erro.message);
        res.status(objErro.cod).send({ status: "Falha", mensagem: objErro.mensagem }); 
    }
}
