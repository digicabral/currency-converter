var Rate = require('../db_models/rate');
const User = require('../db_models/user');
const Convert = require('../db_models/convert')
const fs = require('fs').promises;
const utils = require('../utils/utils.js')
const allowedCurrencies = ['BRL', 'USD', 'EUR', 'JPY']

async function get(req, res, next){
    try {
        async function readJson() {
            const data = await fs.readFile('./rate.json');
            return data;
        }
        JSONrates = await readJson();
        ratesParsed = JSON.parse(JSONrates);
        let rates = {
            'date': ratesParsed.date,
            'base': ratesParsed.base,
            'brl': ratesParsed.rates.BRL,
            'jpy': ratesParsed.rates.JPY,
            'eur': ratesParsed.rates.EUR,
            'usd': ratesParsed.rates.USD
        }
        userId = req.query.user;
        dbUser = await User.findByPk(userId)
        if (dbUser == null || dbUser == 'null' || dbUser == undefined){
            res.status(404).send('User with id ' + userId + ' not found')
        }
        originCurrency = req.query.origin_currency;
        originValue = req.query.origin_rate;
        targetCurrency = req.query.target_currency;

        if (!utils.multipleExist(allowedCurrencies, [originCurrency, targetCurrency]))
        {
            res.status(422).send('Not allowed currency')
        }
        else {

            async function insertRate(){
                const data = await Rate.create(rates).then(result => result)
                return data
            }
            latestRate = await insertRate();

            const converted = {
                userId: userId,
                originCurrency: originCurrency,
                originValue: originValue,
                targetCurrency: targetCurrency,
                targetValue: (originValue/latestRate[originCurrency.toLowerCase()]) * latestRate[targetCurrency.toLowerCase()],
                conversionRate: (latestRate['eur']/latestRate[originCurrency.toLowerCase()]) * latestRate[targetCurrency.toLowerCase()],
                transactionDate: new Date(new Date().toUTCString())
            }

            async function insertConverted(){
                const data = await Convert.create(converted).then(result => result)
                return data
            }
            convertedDB = await insertConverted();

            res.status(201).json(convertedDB)
        }

        }
    catch(err){
        next(err)
    }
    
}
module.exports.get = get;

