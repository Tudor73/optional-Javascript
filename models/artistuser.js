'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ArtistUser extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.ArtistUser.belongsTo(models.Artist, {
                foreignKey: 'artistId',
            });
            models.ArtistUser.belongsTo(models.User, {
                foreignKey: 'userId',
            });
        }
    }
    ArtistUser.init({
        artistId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'ArtistUser',
    });
    return ArtistUser;
};