const { GraphQLInt, GraphQLNonNull, GraphQLObjectType } = require("graphql");
const UserArtistType = require("../types/userArtistType")
const createUserArtistResolver = require("../resolvers/createUserArtistResolver")



module.exports = {
    type: UserArtistType,   
    args: {
        userId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        artistId: {
            type: new GraphQLNonNull(GraphQLInt)
        }
    },
    resolve: createUserArtistResolver
}