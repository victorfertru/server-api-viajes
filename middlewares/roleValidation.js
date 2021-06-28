const { ROLE } = require("../utils/constants");
const HttpError = require("../utils/httpError");

exports.roleValidation = (role) => {
  let roles = "";
  if (role) {
    roles = Array.isArray(role) ? role : [role];
  }
  return (req, res, next) => {
    if (![...roles, ROLE.ADMIN].includes(req.user?.role))
      throw new HttpError(401);
    next();
  };
};

exports.IsTokenValid = () => {
  return (req, res, next) => {
    if (!req.tokenValid) throw new HttpError(401);

    next();
  };
};
