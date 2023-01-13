'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class UserArtist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
        models.UserArtist.belongsTo(models.User, {
            foreignKey: 'userId',
        });
        models.UserArtist.belongsTo(models.Artist, {
            foreignKey: 'artistId',
        });
    }
  }
  UserArtist.init({
    artistId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'userartists',
    modelName: 'UserArtist',
  });
  return UserArtist;
};