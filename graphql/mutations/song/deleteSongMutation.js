const { GraphQLBoolean, GraphQLNonNull, GraphQLID } = require("graphql");

const deleteSongResolver = require('../../resolvers/song/deleteSongResolver');

module.exports = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: deleteSongResolver,
};