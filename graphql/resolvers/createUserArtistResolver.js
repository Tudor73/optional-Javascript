const models = require("../../models");

module.exports = async (source, {userId, artistId}) => {
    const userArtist = await models.UserArtist.create({
        userId, 
        artistId
    })
    return userArtist
}