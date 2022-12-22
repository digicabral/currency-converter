const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const validator = require('../utils/validator')

const transactions = require('../middlewares/transactions')

router.get('/:userId', transactions.get);

module.exports = router;