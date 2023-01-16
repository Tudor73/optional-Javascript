const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt, GraphQLList } = require("graphql");

const artistType = new GraphQLObjectType({
  name: "Artist",
  fields: () => {
    const songType = require("./songType");
    const models = require("../../models");
    return {
      id: {
        type: GraphQLID,
      },
      name: {
        type: GraphQLString,
      },
      followers: {
        type: GraphQLInt,
      },
      songs: {
        type: new GraphQLList(songType),
        resolve: (artist) => {
          return models.Song.findAll({
            where: {
              artistId: artist.id,
            },
          });
        },
      },
    };
  },
});
module.exports = artistType;
