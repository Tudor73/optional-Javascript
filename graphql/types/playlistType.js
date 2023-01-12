const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require("graphql");
const songType = require("./songType");

const playlistType = new GraphQLObjectType({
    name: "Playlist", 
    fields: {
        id: {
            type: GraphQLID,
        },
        name: {
            type: GraphQLString
        },
        songs: {
            type: new GraphQLList(songType)
        }
    }
}) 
module.exports = playlistType