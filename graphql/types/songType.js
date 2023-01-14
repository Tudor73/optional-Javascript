const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = require("graphql");

const songType = new GraphQLObjectType({
    name: "Song", 
    fields: {
        id: {
            type: GraphQLID,
        },
        title: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        },
        year: {
            type: GraphQLInt
        }
    }
}) 
module.exports = songType