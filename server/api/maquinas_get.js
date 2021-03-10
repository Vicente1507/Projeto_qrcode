const dbCon = require('../db.js');

const filtrarMidias = (midias, id) => (
    midias.filter(({ maquina_id }) => maquina_id  === id).
    map(({ caminho, nome }) => ({ caminho, titulo: nome }))
);

module.exports = (req, res) => {
    try {
        dbCon.query('SELECT * FROM maquina', (erroMaquina, maquina) => {
            if (erroMaquina) {
                const erro = JSON.stringify({ cod: 502, mensagem: "Erro ao buscar dados das máquinas!" });
                throw new Error(erro);
            }

            dbCon.query('SELECT * FROM midias', (erroMidias, midias) => {
                if (erroMidias) {
                    const erro = JSON.stringify({ cod: 502, mensagem: "Erro ao buscar dados das midias!" });
                    throw new Error(erro);
                }

                const dados = maquina.map((item) => ({
                    ...item,
                    midias: filtrarMidias(midias, item.id)
                }));

                res.status(200).send(dados);
            });
        });
    } catch (erro) {
        const objErro = JSON.parse(erro.message);
        res.status(objErro.cod).send({ status: "Falha", mensagem: objErro.mensagem }); 
    }
}
