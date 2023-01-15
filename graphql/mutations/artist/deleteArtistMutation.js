const { GraphQLBoolean, GraphQLNonNull, GraphQLID } = require("graphql");

const deleteArtistResolver = require('../../resolvers/artist/deleteArtistResolver');

module.exports = {
    type: GraphQLBoolean,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
    },
    resolve: deleteArtistResolver,
};