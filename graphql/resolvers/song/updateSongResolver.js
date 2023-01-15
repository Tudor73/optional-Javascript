const models = require("../../../models");

module.exports = async (source, args, { tokenPayload }) => {
    const { id, title, genre, year } = args;

    await models.Song.update({
        title,
        genre,
        year
    }, {
        where: {
            id,
        }
    });

    return models.Song.findByPk(id);
}