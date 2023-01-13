const express = require("express");

app.use(express.json());

app.listen(5000);

const JWTMiddleware = require('./middlewares/JWTMiddleware');
const app = express();

app.listen(8080);

app.post('/graphql', JWTMiddleware, graphqlHTTP({
    schema: schema,
}));
