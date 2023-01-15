const { GraphQLObjectType } = require('graphql');
const createArtistMutation = require('./mutations/artist/createArtistMutation');

const createUserMutation = require('./mutations/createUserMutation');
const deleteArtistMutation = require('./mutations/artist/deleteArtistMutation');
const loginMutation = require('./mutations/loginMutation');
const updateArtistMutation = require('./mutations/artist/updateArtistMutation');
const createSongMutation = require('./mutations/song/createSongMutation');
const deleteSongMutation = require('./mutations/song/deleteSongMutation');
const updateSongMutation = require('./mutations/song/updateSongMutation');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: createUserMutation,

        createArtist: createArtistMutation,
        updateArtist: updateArtistMutation,
        deleteArtist: deleteArtistMutation,

        createSong: createSongMutation,
        updateSong: updateSongMutation,
        deleteSong: deleteSongMutation,


        login: loginMutation,
    }
});

module.exports = mutationType;