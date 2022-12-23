const Rate = require('../db_models/rate');
const axios = require('axios')

async function insertRate(rate){
    const data = await Rate.create(rate).then(result => result)
    return data
}
module.exports.insertRate = insertRate;

const exchangeConfig = {
    method: 'get',
    url: process.env.EXCHANGE_API,
    headers: { 'Accept-Encoding': 'gzip,deflate,compress',
               'apikey': process.env.API_KEY
             }
  };

async function getApiExchangeRates(){
    const teste = await axios(exchangeConfig)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      return response.data
    })
    .catch(function (error) {
        if (error.response){
            const err = {
                status: error.response.status,
                headers: error.response.headers,
                data: error.response.headers
            }
        }
      console.log(error);
      return error
    });
    return teste
}

async function getLatestRates(){
    const apiRates = await getApiExchangeRates();
    if (!apiRates.success){
        return apiRates;
    }
    else{
        const rates = {
            'date': apiRates.date,
            'base': apiRates.base,
            'brl': apiRates.rates.BRL,
            'jpy': apiRates.rates.JPY,
            'eur': apiRates.rates.EUR,
            'usd': apiRates.rates.USD
        }
        return rates
    }
}
module.exports.getLatestRates = getLatestRates;
