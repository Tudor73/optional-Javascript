const models = require("../../../models");

module.exports = async (source, { name, followers }, { tokenPayload }) => {
    console.log(tokenPayload)
    if(tokenPayload){
        if(tokenPayload.roleId !== '2'){
            return null  // user is not an artist
        }
    }
    const artist = await models.Artist.create(
        {
            name,
            followers
        }
    );

    return await artist;
}
