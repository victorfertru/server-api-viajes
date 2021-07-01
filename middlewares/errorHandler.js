const errorHandler = (error, req, res, next) => {
  const status = error.statusCode ?? 500;

  if (
    error.name === "JsonWebTokenError" ||
    error.name === "TokenExpiredError" ||
    error.name === "NotBeforeError"
  ) {
    res.status(401).send({ message: error.message });
    return;
  }

  res.status(status).json({ message: error.message });
};

module.exports = errorHandler;
