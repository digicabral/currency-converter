/* eslint-disable require-jsdoc */
const User = require('../db_models/user');

async function getUserById(userId) {
  const user = await User.findByPk(userId);
  return user;
}
module.exports.getUserById = getUserById;

async function getAllUsers() {
  const users = await User.findAll();
  return users;
}
module.exports.getAllUsers = getAllUsers;

async function insertUser(user) {
  const userInserted = User.create(user).then((result) =>result);
  return userInserted;
}
module.exports.insertUser = insertUser;
