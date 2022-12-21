const express = require('express');
const router = express.Router();
const convert = require('../middlewares/convert')

const rate = require('../middlewares/rate')


router.get('/', convert.get)
router.get('/rate', rate.get)
module.exports = router;