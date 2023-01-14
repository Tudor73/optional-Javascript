const { GraphQLNonNull, GraphQLString } = require("graphql");
const createUserResolver = require('../resolvers/createUserResolver');
const userSessionType = require("../types/userSessionType");

module.exports = {
    type: userSessionType,
    args: {
        username: {
            type: new GraphQLNonNull(GraphQLString),
        },
        password: {
            type: new GraphQLNonNull(GraphQLString),
        },
    },
    resolve: createUserResolver,
}