const {GraphQLSchema, GraphQLObjectType, GraphQLString} = require("graphql")
const mutationType = require("./mutationTypes")
const queryType = require("./queryType")

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType
})
module.exports = schema

