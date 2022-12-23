const Convert = require('../db_models/convert')

async function insertConverted(converted){
    const data = await Convert.create(converted).then(result => result)
    return data
}
module.exports.insertConverted = insertConverted;