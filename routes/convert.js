const express = require('express');
const router = express.Router();

const convert = require('../middlewares/convert')

router.get('/', convert.get)

module.exports = router;