const { GraphQLObjectType, GraphQLList } = require("graphql");
const songsQuery = require("./queries/songsQuery");

const songQueries = new GraphQLObjectType({
    name: "Songs",
    fields: {
        songs: songsQuery
    }
})

module.exports = songQueries