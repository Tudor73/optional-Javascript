const { GraphQLNonNull, GraphQLString, GraphQLInt } = require("graphql");
const artistType = require("../types/artistType");
const createArtistResolver = require('../resolvers/createArtistResolver');


module.exports = {
    type: artistType,
    args: {
        name: {
            type: new GraphQLNonNull(GraphQLString),
        },
        followers: {
            type: new GraphQLNonNull(GraphQLInt),
        },
    },
    resolve: createArtistResolver,
}