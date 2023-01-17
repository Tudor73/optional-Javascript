const { GraphQLObjectType, GraphQLList } = require("graphql");
const artistsQuery = require("./queries/artistsQuery");
const songsQuery = require("./queries/songsQuery");
const userArtistQuery = require("./queries/userArtistQuery");

const songQueries = new GraphQLObjectType({
    name: "Songs",
    fields: {
        songs: songsQuery,
        artists: artistsQuery,
        userArtists: userArtistQuery
    }
})

module.exports = songQueries