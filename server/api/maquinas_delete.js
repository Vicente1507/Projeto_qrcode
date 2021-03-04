const dbCon = require("../db.js");

module.exports = (req, res, next) => {
    try {
        const id = req.params.id

        if(!id){        
            const erro = JSON.stringify({
                cod: 400, mensagem: "Dados incompletos!"
            });
            throw new Error(erro);
        }

        dbCon.query(`delete from maquina where id = ${id}`, (erroMaquina) => {          
            if(erroMaquina){        
                const erro = JSON.stringify({
                    cod: 502, mensagem: "Erro ao remover dados da tabela máquina!"
                });
                throw new Error(erro);
            }

            dbCon.query(`delete from midias where maquina_id = ${id}`, (erroMidias) =>{        
                if(erroMidias){        
                    const erro = JSON.stringify({
                        cod: 502, mensagem: "Erro ao remover dados da tabela midias!"
                    });
                    throw new Error(erro);
                }    
                res.status(201).send({status:"sucesso", mensagem:"dados removidos com sucesso!"})

            });
        });

    }
    catch(erro){
        const objErro = JSON.parse(erro.message);
        //resposta da API
        res.status(objErro.cod).send({ status : "Falha", mensagem: objErro.mensagem});
    }
}
