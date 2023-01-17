const {GraphQLList} = require("graphql")
const models = require("../../models")
const userArtistType = require("../types/userArtistType")


module.exports = {
    type: new GraphQLList(userArtistType),
    resolve: () => {
        return models.UserArtist.findAll()
     }
}