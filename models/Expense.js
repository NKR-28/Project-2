const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expense extends Model { }

Expense.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    budget_id: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    dollerAmount: {
      type: DataTypes.INTEGER,
      allowNull: false,

      //  date? maybe we want this 
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