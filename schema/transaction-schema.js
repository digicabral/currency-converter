const { query } = require('express-validator');
const transactionSchema = [ query('userId').isNumeric().withMessage('userId must to be a number'),
                            query('userId').notEmpty().withMessage('userId cannot be empty')       
]
module.exports.transactionSchema = transactionSchema;