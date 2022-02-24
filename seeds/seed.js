const sequelize = require('../config/connection');
const { User, Budget, Expense } = require('../models');



const userData = require('./userData.json');
const budgetData = require('./budgetData.json');
const expenseData = require('./expenseData.json');
/**
 * Leaving for future reference
 */
 
// const projectData = require('./projectData.json');

const seedUserDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

const seedBudgetDatabase = async () => {
  await sequelize.sync({ force: true });

  const budgets = await Budget.bulkCreate(budgetData, {
    // individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

const seedExpenseDatabase = async () => {
  await sequelize.sync({ force: true });

  const expenses = await Expense.bulkCreate(expenseData, {
    // individualHooks: true,
    returning: true,
  });

  process.exit(0);
};
seedUserDatabase();
seedBudgetDatabase();
seedExpenseDatabase();
