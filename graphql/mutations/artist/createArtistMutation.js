const { GraphQLNonNull, GraphQLString, GraphQLInt } = require("graphql");
const artistType = require("../../types/artistType");
const createArtistResolver = require('../../resolvers/artist/createArtistResolver');


module.exports = {
    type: artistType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        followers: {
            type: GraphQLInt,
            defaultValue: 0
        },
    },
    resolve: createArtistResolver,
}