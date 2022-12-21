var User = require('../db_models/user');
async function post(req, res, next){
    try {
            await User.create(req.body).then(()=>{
            res.send('user inserted');
            })
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