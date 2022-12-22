const express = require('express');
const router = express.Router();
const convert = require('../middlewares/convert');
const { convertSchema } = require('../schema/convert-schema');
const validator = require('../utils/validator')

router.get('/',
            convertSchema,
            validator.validateRequestSchema,
            convert.get)

module.exports = router;