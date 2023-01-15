const { GraphQLObjectType } = require('graphql');
const createArtistMutation = require('./mutations/createArtistMutation');

const createUserMutation = require('./mutations/createUserMutation');
const deleteArtistMutation = require('./mutations/deleteArtistMutation');
const loginMutation = require('./mutations/loginMutation');
const updateArtistMutation = require('./mutations/updateArtistMutation');

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        createUser: createUserMutation,
        createArtist: createArtistMutation,
        updateArtist: updateArtistMutation,
        deleteArtist: deleteArtistMutation,
        login: loginMutation,
    }
});

module.exports = mutationType;