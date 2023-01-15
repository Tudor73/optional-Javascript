const models = require("../../../models");

module.exports = async (source, args, { tokenPayload }) => {
    const { id, name } = args;

    await models.Artist.update({
        name,
    }, {
        where: {
            id,
        }
    });

    return models.Artist.findByPk(id);
}