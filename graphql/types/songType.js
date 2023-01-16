const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLNonNull } = require("graphql");
const artistType = require("./artistType");
const models = require("../../models")
const songType = new GraphQLObjectType({
    name: "Song", 
    fields: {
        id: {
            type: GraphQLID
        },
        title: {
            type: GraphQLString
        },
        genre: {
            type: GraphQLString
        },
        year: {
            type: GraphQLInt
        },
        artistId: {
            type: new GraphQLNonNull(GraphQLInt)
        },
        artist: { 
            type: artistType,
            resolve: (song) => {
                return models.Artist.findByPk(song.artistId) 
            }
        }
    }
}) 
module.exports = songType