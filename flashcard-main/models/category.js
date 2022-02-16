const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    category_type: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'expense',
  }
);

module.exports = Expense;