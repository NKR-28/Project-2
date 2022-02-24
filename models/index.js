const User = require('./User');
const Expense = require('./Expense');
const Budget = require('./Budget');

User.hasMany(Budget, {
    foreignKey: "user_id",
    onDelete: "CASCADE",
  });
  
  Budget.belongsTo(User, {
    foreignKey: "user_id",
  });

  
  Budget.hasMany(Expense, {
    foreignKey: "budget_id",
    onDelete: "CASCADE",
  });
  
  Expense.belongsTo(Budget, {
    foreignKey: "budget_id",
  });


module.exports = { User, Budget, Expense };
