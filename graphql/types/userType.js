const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require("graphql");

const userType = new GraphQLObjectType({
    name: "User", 
    fields: {
        id: {
            type: GraphQLID,
        },
        username: {
            type: GraphQLString
        },
    }
}) 
module.exports = userType