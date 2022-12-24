const user = require('../controllers/user');

async function post(req, res, next){
    try {
            const userFromDb = await user.insertUser(req.body)
            res.status(201).send(userFromDb);
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