var Rate = require('../db_models/rate');
var fs = require('fs');

async function get(req, res, next){
    try {
            res.send('teste')
        }
    catch(err){
        next(err)
    }
    
}
module.exports.get = get;