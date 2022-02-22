const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Budget extends Model {}

Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    budget_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    budget_amount:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    budget_spent:{
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'Budget',
  }
);

module.exports = Budget;