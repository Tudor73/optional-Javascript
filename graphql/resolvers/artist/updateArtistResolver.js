const models = require("../../../models");

module.exports = async (source, args, { tokenPayload }) => {
    const { id, name } = args;

    if (tokenPayload) {
        if (tokenPayload.createdId !== toString(id)) {
            return null  // user is not the artist to be updated
        }
    }

    await models.Artist.update({
        name,
    }, {
        where: {
            id,
        }
    });

    return models.Artist.findByPk(id);
}