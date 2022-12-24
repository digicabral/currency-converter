const { query } = require('express-validator');
const convertSchema = [ query('userId').notEmpty().withMessage('userId cannot be empty'),
                        query('userId').isNumeric().withMessage('userId must to be a number'),
                        query('originCurrency').isAlpha().withMessage('Origin currency must to be string'),
                        query('originValue').isFloat().withMessage('Origin rate must to be a float type'),
                        query('targetCurrency').isAlpha().withMessage('Target currency must to be a string')
]
module.exports.convertSchema = convertSchema;