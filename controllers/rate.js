/* eslint-disable require-jsdoc */
const axios = require('axios');

const exchangeConfig = {
  method: 'get',
  url: process.env.EXCHANGE_API,
  headers: {'Accept-Encoding': 'gzip,deflate,compress',
    'apikey': process.env.API_KEY,
  },
};

async function getApiExchangeRates() {
  const teste = await axios(exchangeConfig)
      .then(function(response) {
      // console.log(JSON.stringify(response.data));
        return response.data;
      })
      .catch(function(error) {
        if (error.response) {
          const err = {
            status: error.response.status,
            headers: error.response.headers,
            data: error.response.headers,
          };
          console.log(err);
        }
        console.log(error);
        return error;
      });
  return teste;
}

async function getLatestRates(originCurrency, targetCurrency) {
  const apiRates = await getApiExchangeRates();
  if (!apiRates.success) {
    return apiRates;
  } else {
    const rates = {
      'date': apiRates.date,
      'base': apiRates.base,
      'EUR': apiRates.rates.EUR,
      [originCurrency]: apiRates.rates[originCurrency],
      [targetCurrency]: apiRates.rates[targetCurrency],
    };
    console.log('rates ' + JSON.stringify(rates));
    return rates;
  }
}
module.exports.getLatestRates = getLatestRates;
