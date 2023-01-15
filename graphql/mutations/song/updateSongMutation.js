
const { GraphQLNonNull, GraphQLString, GraphQLID, GraphQLInt } = require("graphql");
const songType = require("../../types/songType");
const updateSongResolver = require('../../resolvers/song/updateSongResolver');

module.exports = {
    type: songType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID)
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
    },
    resolve: updateSongResolver
}