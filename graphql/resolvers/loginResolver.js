const models = require("../../models");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports = async (source, args) => {

    const { username, password } = args;

    const user = await models.User.findOne({
        where: {
            username: username,
        }
    });

    if (!user) {
        return { token: null }
    }

    const passwordMatches = await bcrypt.compare(password, user.password);

    if (passwordMatches) {
        const token = jwt.sign({ userID: user.id }, JWT_SECRET);

        return { token }
    }

    return { token: null }
}