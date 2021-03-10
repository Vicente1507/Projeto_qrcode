const dbCon = require('../db.js');

const formatarValoresMidias = (midias, id) => (
    midias.reduce((ant, atual) => (
        ant + `${(ant) ? ", " : ""}(null, ${id}, "${atual.caminho}", "${atual.titulo}")`
    ), "")
);

module.exports = (req, res) => {
    try {
        const { nome, descricao } = req.body;

        const midias = req?.files.map(({ originalname, path }) => ({
            caminho: path.replace('\\', '/'),
            titulo: originalname.split('.')[0]
        }));

        if (!nome || !descricao || !midias?.length > 0) {
            const erro = JSON.stringify({ cod: 400, mensagem: 'Dados incompletos!' });
            throw new Error(erro);
        }

        dbCon.query(`INSERT INTO maquina (id, nome, descricao) VAlUES (null, '${nome}', '${descricao}')`,
        (erroMaquina, resMaquina) => {
            if (erroMaquina) {
                const erro = JSON.stringify({ cod: 502, mensagem: 'Erro ao inserir dados na tabela maquinas!' });
                throw new Error(erro);
            }

            dbCon.query(`
                INSERT INTO midias (id, maquina_id, caminho, nome)
                VALUES ${formatarValoresMidias(midias, resMaquina.insertId)}
                `,
                (erroMidias) => {
                    if (erroMidias) {
                        const erro = JSON.stringify({
                            cod: 502,
                            mensagem: 'Erro ao inserir dados na tabela imagens!'
                        });

                        throw new Error(erro);
                    }

                    res.status(201).send({ status: "Sucesso", mensagem: "Dados adicionados com sucesso!" });
                }
            );
        });
    } catch ({ message }) {
        const { cod, mensagem } = JSON.parse(message);
        res.status(cod).send({ status: 'Falha', mensagem });
    }
}
