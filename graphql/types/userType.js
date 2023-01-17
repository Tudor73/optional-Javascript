const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLList } = require("graphql");
const models = require("../../models")

const userType = new GraphQLObjectType({
    name: "User", 
    fields: () => {
        const userArtistType = require("../types/userArtistType")
        return {
            id: {
                type: GraphQLID,
            },
            username: {
                type: GraphQLString
            },
            password: {
                type: GraphQLString
            }, 
            following: { 
                type: new GraphQLList(userArtistType),
                resolve: (user) => {
                  return models.UserArtist.findAll({
                    where: {
                      userId: user.id,
                    },
                  });
                },
            }
        }
    }
}) 
module.exports = userType