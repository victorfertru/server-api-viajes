const User = require("../models/User");

const { Op } = require("sequelize");

exports.findUserByEmail = async (email) => {
  return await User.findOne({ where: { email } });
};

exports.findUserByName = async (name) => {
  return await User.findOne({ where: { name: { [Op.substring]: name } } });
};

exports.findAllUsers = async () => {
  return await User.findAll();
};

exports.findUserWithPasswordByEmail = async (email) => {
  return await User.scope("withPassword").findOne({ where: { email } });
};

exports.createUser = async (user) => {
  return await User.create(user);
};
