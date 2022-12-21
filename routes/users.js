const express = require('express');
const router = express.Router();
const user = require('../middlewares/user');


/* GET users listing. */
router.get('/', user.get);
router.post('/', user.post);

module.exports = router;