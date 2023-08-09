'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Week extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Week.init({
    day: DataTypes.STRING,
    firstdish_id: DataTypes.INTEGER,
    seconddish_id: DataTypes.INTEGER,
    thirddish_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    callories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Week',
  });
  return Week;
};