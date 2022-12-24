const Convert = require('../db_models/convert');
const user = require('../controllers/user');

async function get(req, res, next){
    try {
        userId = req.query.userId;
        limit = req.query.limit;
        offset = req.query.offset;
        console.log(userId)
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
        //check if the user exists
        const userFromDb = await user.getUserById(userId);
        if(!userFromDb){
            res.status(404).send('User ' + userId + ' does not exist.');
        }
        else{
            //search for the user's transactions
            transactions = await Convert.findAll({where: {userId: userId}, offset: offset, limit: limit});
            console.log('Transactions '+ JSON.stringify(transactions))
            if(transactions == null || transactions.length == 0){
                res.status(404).send('Not found any transaction to the user ' + userId);
            }
            else{
                res.status(200).send(transactions)
            }
        } 
    } catch (error) {
        console.log(error)
    }
}
module.exports.get = get;