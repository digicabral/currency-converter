/* eslint-disable require-jsdoc */
const user = require('../controllers/user');
const convert = require('../controllers/convert');
const allowed = require('../schema/currency-schema');

async function get(req, res, next) {
  try {
    userId = req.query.userId;

    dbUser = await user.getUserById(userId);
    if (dbUser == null || dbUser == 'null' || dbUser == undefined) {
      res.status(404).send('User with id ' + userId + ' not found');
    }
    const originCurrency = req.query.originCurrency;
    const originValue = req.query.originValue;
    const targetCurrency = req.query.targetCurrency;

    if (!convert
        .canBeConverted(allowed.allowedCurrencies,
            originCurrency,
            targetCurrency)) {
      res.status(422).send('Not allowed currency');
    } else {
      const conversion = await convert
          .calculateConversion(originCurrency, originValue, targetCurrency);
      const convertedFromDB = await convert
          .insertConverted(conversion);
      res.status(200).json(convertedFromDB);
    }
  } catch (err) {
    next(err);
  }
}
module.exports.get = get;

