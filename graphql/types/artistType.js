const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require("graphql");

const artistType = new GraphQLObjectType({
    name: "Artist", 
    fields: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString
        },
        followers: {
            type: GraphQLInt
        }
    }
}) 
module.exports = artistType