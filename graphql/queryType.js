const { GraphQLObjectType, GraphQLList } = require("graphql");
const artistsQuery = require("./queries/artistsQuery");
const songsQuery = require("./queries/songsQuery");
const userArtistQuery = require("./queries/userArtistQuery");
const userQuery = require("./queries/userQuery");

const songQueries = new GraphQLObjectType({
    name: "Songs",
    fields: {
        songs: songsQuery,
        artists: artistsQuery,
        user: userQuery,
        userArtists: userArtistQuery
    }
})

module.exports = songQueries