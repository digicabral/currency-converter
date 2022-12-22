const Convert = require('../db_models/convert')

async function get(req, res, next){
    try {
        userId = req.params.userId;
        limit = req.query.limit;
        offset = req.query.offset;
        if(!userId){
            res.status(404).send('userID is a mandatory parameter');
        }

        if (!limit){
            limit = 10;
        }

        if(!offset){
            offset = 0;
            console.log(offset)
        }

        transactions = await Convert.findAll({where: {userId: userId}, offset: offset, limit: limit});
        if(transactions == null){
            res.status(404).send('Not found any transaction to the user ' + userId);
        }
        else{
            res.status(200).send(transactions)
        }
    } catch (error) {
        throw new Error('Account Number not found');
    }
}
module.exports.get = get;