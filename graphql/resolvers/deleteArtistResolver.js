const models = require("../../models");

module.exports = (source, { id }) => {
    return models.Artist.destroy({
        where: {
            id,
        }
    })
}