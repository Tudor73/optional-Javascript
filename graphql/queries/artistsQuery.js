const { GraphQLList } = require("graphql")
const artistType = require(".././types/artistType")
const models = require("../../models")

module.exports = {
    type: new GraphQLList(artistType),
    resolve: () => {
        return models.Artist.findAll()
    }
}