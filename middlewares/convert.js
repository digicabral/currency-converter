const user = require('../controllers/user');
const conversion = require('../controllers/convert');
const rate = require('../controllers/rate');
const utils = require('../utils/utils.js')
const allowedCurrencies = ['brl', 'usd', 'eur', 'jpy']

async function get(req, res, next){
    try {
        const rates = await rate.getLatestRates();

        userId = req.query.userId;

        dbUser = await user.getUserById(userId)
        if (dbUser == null || dbUser == 'null' || dbUser == undefined){
            res.status(404).send('User with id ' + userId + ' not found')
        }
        const originCurrency = req.query.originCurrency.toLowerCase();
        const originValue = req.query.originRate.toLowerCase();
        const targetCurrency = req.query.targetCurrency.toLowerCase();

        if (!utils.multipleExist(allowedCurrencies, [originCurrency, targetCurrency]))
        {
            res.status(422).send('Not allowed currency')
        }
        else {

            latestRate = await rate.insertRate(rates);

            const converted = {
                userId: userId,
                originCurrency: originCurrency,
                originValue: originValue,
                targetCurrency: targetCurrency,
                targetValue: (originValue/latestRate[originCurrency]) * latestRate[targetCurrency],
                conversionRate: (latestRate['eur']/latestRate[originCurrency]) * latestRate[targetCurrency]
            }
            
            convertedDB = await conversion.insertConverted(converted);

            res.status(201).json(convertedDB)
        }
        }
    catch(err){
        next(err)
    }
    
}
module.exports.get = get;

