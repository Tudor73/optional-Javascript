
const { GraphQLNonNull, GraphQLString, GraphQLID } = require("graphql");
const artistType = require("../../types/artistType");
const updateArtistResolver = require('../../resolvers/artist/updateArtistResolver');

module.exports = {
    type: artistType,
    args: {
        id: {
            type: new GraphQLNonNull(GraphQLID),
        },
        name: {
            type: GraphQLString,
        }
    },
    resolve: updateArtistResolver
}