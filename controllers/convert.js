const Convert = require('../db_models/convert');
const rate = require('./rate');
const utils = require('../utils/utils');

async function insertConverted(converted){
    const data = await Convert.create(converted).then(result => result)
    return data;
}
module.exports.insertConverted = insertConverted;

async function calculateConversion(originCurrency, originValue, targetCurrency){
    const latestRates = await rate.getLatestRates(originCurrency, targetCurrency);
    const converted = {
        userId: userId,
        originCurrency: originCurrency,
        originValue: originValue,
        targetCurrency: targetCurrency,
        targetValue: (originValue/latestRates[originCurrency]) * latestRates[targetCurrency],
        conversionRate: (latestRates['EUR']/latestRates[originCurrency]) * latestRates[targetCurrency]
    }
    return converted;
}
module.exports.calculateConversion = calculateConversion;

function canBeConverted(allowedCurrencies, originCurrency, targetCurrency){
    return utils.multipleExist(allowedCurrencies, [originCurrency, targetCurrency]);
}
module.exports.canBeConverted = canBeConverted;