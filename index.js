const express = require("express");
const JWTMiddleware = require('./middlewares/JWTMiddleware');
const schema = require("./graphql")
const { graphqlHTTP } = require('express-graphql');

require('dotenv').config({ path: './config/jwt.env' });
JWT_SECRET = process.env.SECRET;

const app = express();

app.listen(5000);

app.use('/graphql', JWTMiddleware, graphqlHTTP({
    schema: schema,
    graphiql: true
}));

module.exports = JWT_SECRET