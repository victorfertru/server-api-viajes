exports.ROLE = Object.freeze({
  USER: "user",
  ADMIN: "admin",
});

exports.ERRORS = Object.freeze({
  NONE_ID: "You must provide ID",
  USER_NOT_FOUND: "User not found",
  WRONG_PASSWORD: "Wrong password",
  INVALID_DATA: "Invalid data provided",
  CUSTOMER_NOT_EXIST: "None customer exists with id ",
  MS_NOT_EXIST: "None marital status exists with id ",
  NO_CUSTOMER: "You must provide a customer",
  NO_MARITALSTATUS: "You must provide a marital status",
  NO_TRIPTYPE: "You must provide a trip type",
  TT_NOT_EXIST: "None trip type exists with id ",
  TRAVEL_NOT_EXIST: "None travel exists with id ",
  NO_TRAVEL: "You must provide a travel",
});
