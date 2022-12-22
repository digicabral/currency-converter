const express = require('express');
const router = express.Router();
const { transactionSchema } = require('../schema/transaction-schema');
const validator = require('../utils/validator')

const transactions = require('../middlewares/transactions')

router.get('/', 
            transactionSchema,
            validator.validateRequestSchema,
            transactions.get);

module.exports = router;