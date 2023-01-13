const jwt = require("jsonwebtoken");
require('dotenv').config({ path: './config/jwt.env' });
JWT_KEY = process.env.SECRET;

const JWTMiddleware = (request, response, next) => {
  const authorization = request.headers.authorization;
  if (!authorization) {
    response.status(403).send({
      message: "Unauthorized",
    });
    return;
  }

  const token = authorization.replace("Bearer ", "");

  try {
    const tokenPayload = jwt.verify(token, JWT_KEY);
    request.tokenPayload = tokenPayload;

    next();
  } catch (e) {
    response.status(403).send({
      message: "Unauthorized",
    });
    return;
  }
};

module.exports = JWTMiddleware;
