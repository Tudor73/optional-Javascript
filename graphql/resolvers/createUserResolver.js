const models = require("../../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const ROLE = {"USER": 1, "ARTIST": 2}
const ROUNDS = 7

module.exports = async (source, { username, password }, {tokenPayload}) => {

    // if (tokenPayload) {
    //     if (tokenPayload.roleId !== '1') {
    //         return null  // user is an artist
    //     }
    // }

    const userExists = await models.User.findOne({
        where: {
            username,
        }
    });
    if(userExists){
        return "User already exist"
    }

    password = await bcrypt.hash(password, ROUNDS);

    roleId = ROLE.USER   //change role from here

    const user = await models.User.create({
        username,
        password,
        roleId
    })
    
    // const token = jwt.sign({ userId: user.id, role: ROLE.USER }, JWT_SECRET);

    return await user;
}