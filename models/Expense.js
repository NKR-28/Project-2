const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Expense extends Model { }

Expense.init(
  {
    // id: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    //   // primaryKey: true,
    //   // autoIncrement: true,
    // },
    dollerAmount: {
      type: DataTypes.DECIMAL,
      
    },
  },
  {

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: 'expense',
  }
);

module.exports = Expense;