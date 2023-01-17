const { GraphQLObjectType, GraphQLNonNull, GraphQLInt } = require("graphql");
const userType = require("./userType")
const artistType = require("./artistType")
const models = require("../../models")


const UserArtistType = new GraphQLObjectType({
    name: "UserArtist",
    fields: {
        userId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        
        artistId: {
            type : new GraphQLNonNull(GraphQLInt)
        },
        user: {
            type: userType,
            resolve: (userArtist => {
                return models.User.findByPk(userArtist.userId)
            })

        },
        artist: {
            type: artistType,
            resolve: (userArtist => {
                return models.Artist.findByPk(userArtist.artistId)
            })
        },
        
    }
})
module.exports = UserArtistType