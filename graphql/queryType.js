const { GraphQLObjectType, GraphQLList } = require("graphql");
const artistsQuery = require("./queries/artistsQuery");
const songsQuery = require("./queries/songsQuery");

const songQueries = new GraphQLObjectType({
    name: "Songs",
    fields: {
        songs: songsQuery,
        artists: artistsQuery
    }
})

module.exports = songQueries