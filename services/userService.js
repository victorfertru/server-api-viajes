const userRepository = require("../repositories/userRepository");
const { insertUserSchema } = require("../validations/userValidation");
const encryptPassword = require("../utils/encryptPassword");
const { signToken } = require("./jwtService");

exports.signup = async (user) => {
  const validationData = await insertUserSchema.validateAsync(user);
  validationData.password = await encryptPassword(validationData.password);

  await userRepository.createUser(validationData);
};

exports.login = async (email, password) => {
  if (!email || !password) throw new Error("Invalid data provided");

  const user = await userRepository.findUserWithPasswordByEmail(email);

  if (!user) throw new Error("User not found");

  const encryptedPassword = await encryptPassword(password);
  if (user.password !== encryptedPassword) throw new Error("Wrong password");

  const token = signToken({ id: user.id, email: user.email, role: user.role });

  return token;
};

exports.getAllUsers = async () => {
  return await userRepository.findAllUsers();
};

exports.searchUserByName = async (name) => {
  const user = await userRepository.findUserByName(name);
  return user ? user.toJSON() : "Not user found";
};
