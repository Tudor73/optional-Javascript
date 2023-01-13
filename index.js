const express = require("express");

app.use(express.json());


const JWTMiddleware = require('./middlewares/JWTMiddleware');
const schema = require("./graphql")
const { graphqlHTTP } = require('express-graphql');
const app = express();

app.listen(8080);

app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true
}));