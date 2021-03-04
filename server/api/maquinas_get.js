const dbCon = require("../db.js");

const filtrarImagens = (imagens, id) => (
    imagens.filter(({ maquina_id }) => maquina_id === id).map(({ caminho, nome }) => ({ caminho, titulo: nome }))
);

module.exports = (req, res) => {
    try {
        dbCon.query('SELECT * FROM maquina',
            (erroMaquina, maquina) => {
                if (erroMaquina) {
                    const erro = JSON.stringify({
                        cod: 502, mensagem: "Erro ao buscar dados das máquinas!"
                    });
                    throw new Error(erro);
                }

                dbCon.query('SELECT * FROM midias',
                    (erroMidias, midias) => {
                        if (erroMidias) {
                            const erro = JSON.stringify({
                                cod: 502, mensagem: "Erro ao buscar dados das mídias!"
                            });
                            throw new Error(erro);

                        }

                        const dados =
                        maquina.map((item) => {
                            return {
                                ...item,
                                midias: filtrarImagens(midias, item.id)
                            }
                        });

                        res.status(200).send(dados)
                    })
            })
    } catch (erro) {

    }

}