const User = require('./User');
const Expense = require('./Expense');
const Categroy = require('./Category');

// User.hasMany(Project, {
//   foreignKey: 'user_id',
//   onDelete: 'CASCADE'
// });

// Project.belongsTo(User, {
//   foreignKey: 'user_id'
// });

module.exports = { User };
module.exports = { Expense };
module.exports = { Categroy };