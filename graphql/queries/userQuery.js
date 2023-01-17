const {GraphQLList} = require("graphql")
const userType = require(".././types/userType")
const models = require("../../models")

module.exports = {
    type: new GraphQLList(userType),
    resolve: () => {
        return models.User.findAll()
     }
}