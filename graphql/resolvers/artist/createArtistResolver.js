const models = require("../../../models");

module.exports = async (source, { name, followers }, { tokenPayload }) => {
    console.log(tokenPayload)
    const artist = await models.Artist.create(
        {
            name,
            followers
        }
    );

    return await artist;
}
