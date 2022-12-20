var User = require('../models/user');
var validator = require('email-validator');

async function post(req, res, next){
    try {
        if (validator.validate(req.body.email)){
            await User.create(req.body).then(()=>{
            res.send('user inserted');
            })
        }
        else{
            res.status(422).send('Not a valid e-mail.');
        }
    }
    catch(err){
        next(err)
    }
    
}
module.exports.post = post;

async function get(req, res, next){
    const users = await User.findAll();
    res.send(users)
}
module.exports.get = get;