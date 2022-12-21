var Rate = require('../db_models/convert');
var fs = require('fs');

async function get(req, res, next){
    try {
            //1 - verificar se o usuario existe
            //2 - verificar se a moeda inserida existe
            //3 - faz a requisição na rate e grava no bd
            //4 - busca a ultima cotacao
            //5 - Divide o valor origem pelo valor destino
            //6 - Grava na tabela de conversoes
            //7 - retorna o json no formato pedido 
            res.send('teste')
        }
    catch(err){
        next(err)
    }
}
module.exports.get = get;