'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Nutrition extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'user_id' })
    }
  }
  Nutrition.init({
    name: DataTypes.STRING,
    date: DataTypes.DATE,
    calories: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    period: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Nutrition',
  });
  return Nutrition;
};