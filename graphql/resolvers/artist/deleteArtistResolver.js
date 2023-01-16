const models = require("../../../models");

module.exports = (source, { id }, {tokenPayload}) => {

    if (tokenPayload) {
        if (tokenPayload.createdId !== toString(id)) {
            return null  // user is not the artist to be deleted
        }
    }
    return models.Artist.destroy({
        where: {
            id,
        }
    })
}