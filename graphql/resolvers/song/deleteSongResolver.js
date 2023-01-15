const models = require("../../../models");

module.exports = (source, { id }) => {
    return models.Song.destroy({
        where: {
            id,
        }
    })
}