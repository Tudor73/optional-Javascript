'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Artist extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Artist.belongsToMany(models.Song, {
                through: models.ArtistSong,
                foreignKey: 'artistId'
            });
            models.Artist.belongsToMany(models.User, {
                through: models.UserArtist,
                foreignKey: 'artistId'

            })
        }
    }
    Artist.init({
        name: DataTypes.STRING,
        followers: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Artist',
    });
    return Artist;
};