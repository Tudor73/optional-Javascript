const express = require("express");
const JWTMiddleware = require('./middlewares/JWTMiddleware');
const app = express();

app.listen(8080);

app.post('/graphql', JWTMiddleware, graphqlHTTP({
    schema: schema,
}));

    