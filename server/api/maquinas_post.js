const dbCon = require('../db.js');

const formatarValoresMidias = (imagens, id) => (
    imagens.reduce((ant, atual) => (
        ant + `${(ant) ? ", " : ""}(null, ${id}, "${atual.caminho}", "${atual.titulo}")`
    ), "")
);

module.exports = (req, res, next) => {
    try{
        const {nome, descricao} = req.body;

        console.log(req.files);
        const imagens = req.files?.map(({originalname, path})=>
        ({
            caminho: path.replace('\\', '/'),
            titulo: originalname.split('.')[0]
        }));

        if(!nome || !descricao || !imagens?.lenght > 0){
            console.log('Primeiro')
            const erro = JSON.stringify({ cod: 400, mensagem: 'Dados incompletos!' });
            throw new Error(erro);
        }

        dbCon.query(`INSERT INTO maquina (id, nome, descricao) VALUES (null, '${nome})', '${descricao}')`,

        (erroMaquinas, resMaquina) => {

            if (erroMaquinas){
                console.log('Segundo')
                const erro = JSON.stringify({ cod: 502, mensagem:'Erro ao inserir dados na tabela maquinas!' });
                throw new Error(erro);
            }

            dbCon.query(`
                INSERT INTO midias (id, maquina_id, caminho, nome)
                VALUE ${formatarValoresMidias(imagens,
                    resMaquina.insertId)} 
            `,
                (erroImagens) => {
                    if (erroImagens){
                        console.log('Terceiro')
                        const erro = JSON.stringify({ cod: 502, mensagem:'Erro ao inserir dados na tabela imagens!' });
                        throw new Error(erro);
                    }
                    res.status(201).send({ status: "Sucesso",
                    mensagem: "Dados adicionados com sucesso!" });

                }
            );
        });

    }catch ({ message }) {
        const {cod, mensagem} = JSON.parse(message)
        res.status(cod).send({ status:'Falha', mensagem });
    }
}