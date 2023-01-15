
const models = require("../../../models");
const songsQuery = require("../../queries/songsQuery");

module.exports = async (source, { title, genre, year, artistId }, { tokenPayload }) => {
    console.log(tokenPayload)

    const song = await models.Song.create(
        {
            title,
            genre,
            year,
            artistId
        }
    );
    song.artistId = artistId
    return await song;
}
