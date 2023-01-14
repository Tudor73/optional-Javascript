const {GraphQLList} = require("graphql")
const songType = require(".././types/songType")
const models = require("../../models")

module.exports = {
    type: new GraphQLList(songType),
    resolve: () => {
        return models.Song.findAll()
     }
}