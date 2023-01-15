const { GraphQLNonNull, GraphQLString, GraphQLInt } = require("graphql");
const songType = require("../../types/songType");
const createSongResolver = require('../../resolvers/song/createSongResolver');

module.exports = {
    type: songType,
    args: {
        title: {
            type: new GraphQLNonNull(GraphQLString)
        },
        genre: {
            type: new GraphQLNonNull(GraphQLString)
        },
        year: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        artistId: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: createSongResolver,
}