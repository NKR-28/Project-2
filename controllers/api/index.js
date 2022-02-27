const router = require('express').Router();
const userRoutes = require('./userRoutes');
const expenseRoutes = require('./expenseRoutes');
const budgetRoutes = require('./budgetRoutes');

router.use('/users', userRoutes);
router.use('/expense', expenseRoutes);
router.use('/budget', budgetRoutes);


module.exports = router;


// budget route to come
