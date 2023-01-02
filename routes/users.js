const express = require('express');
const router = new express.Router();
const user = require('../middlewares/user');
const {userSchema} = require('../schema/user-schema');
const validator = require('../utils/validator');


/* GET users listing. */
router.get('/', user.get);
router.post('/',
    userSchema,
    validator.validateRequestSchema,
    user.post);

module.exports = router;
