const { GraphQLBoolean, GraphQLNonNull, GraphQLID } = require("graphql");

const deleteArtistResolver = require('../resolvers/deleteArtistResolver');

module.exports = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: deleteArtistResolver,
};