const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model {}

Budget.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
      // allowNull: false,
      // primaryKey: true,
      // autoIncrement: true,
    // },
   name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    amount:{
      type: DataTypes.DECIMAL,
      allowNull: false,
    },
  },
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'budget',
  }
);

module.exports = Budget;