const User = require('../db_models/user');

async function getUserById(userId){
    const user = await User.findByPk(userId);
    return user;
}
module.exports.getUserById = getUserById;