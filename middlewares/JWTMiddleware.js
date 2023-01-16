const jwt = require('jsonwebtoken');

const JWTMiddleware = (request, response, next) => {
    const headers = request.headers;
    const authorization = request.headers.authorization;
    if (!authorization) {
        next();
        return;
    }

    const token = authorization.replace('Bearer ', '');

    try {
        const tokenPayload = jwt.verify(token, JWT_SECRET);
        request.tokenPayload = tokenPayload;
        next();
    } catch (e) {
        response.status(403).send({
            message: 'Unauthorized',
        });
        return;
    }
}

module.exports = JWTMiddleware;