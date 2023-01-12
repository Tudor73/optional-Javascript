'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Song extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Song.belongsTo(models.Artist, {
                foreignKey: 'artistId',
            });
            models.Song.belongsToMany(models.Playlist, {
                through: models.PlaylistSong,
                foreignKey: 'songId',
            });
        }
    }
    Song.init({
        title: DataTypes.STRING,
        genre: DataTypes.STRING,
        year: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Song',
    });
    return Song;
};