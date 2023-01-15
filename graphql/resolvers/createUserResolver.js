const models = require("../../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const ROLE = "USER"
const ROUNDS = 7

module.exports = async (source, { username, password }) => {

    const userExists = await models.User.findOne({
        where: {
            username,
        }
    });
    if(userExists){
        //TODO
    }

    password = await bcrypt.hash(password, ROUNDS);
    const user = await models.User.create({
        username,
        password
    })
    
    const token = jwt.sign({ userId: user.id, role: ROLE }, JWT_SECRET);

    return {token};
}