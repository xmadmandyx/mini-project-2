'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class client extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  client.init({
    lname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fname: {
      type: DataTypes.STRING,
      allowNUll: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNUll: false,
    },
    contactnum: {
      type: DataTypes.INTEGER,
      allowNUll: false,
    }
  }, {
    sequelize,
    modelName: 'client',
  });
  return client;
};