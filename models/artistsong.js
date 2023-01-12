'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class ArtistSong extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.ArtistSong.belongsTo(models.Artist, {
                foreignKey: 'artistId',
            });
            models.ArtistSong.belongsTo(models.Song, {
                foreignKey: 'songId',
            });
        }
    }
    ArtistSong.init({
        artistId: DataTypes.INTEGER,
        songId: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'ArtistSong',
    });
    return ArtistSong;
};