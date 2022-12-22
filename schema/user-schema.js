const { body } = require('express-validator');
const userSchema = [ body('email').isEmail().withMessage('Not a valid e-mail.'),
                     body('name').isLength({min: 5}).withMessage('Name minimun length is 5 characters')
]
module.exports.userSchema = userSchema;