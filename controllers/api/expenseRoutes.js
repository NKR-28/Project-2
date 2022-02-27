// change code

const router = require('express').Router();
const { Expense } = require('../../models');


router.get('/expense', async (req, res) => {
  try {
    
    const expenseData = await Expense.findAll({ where: { user_id: req.session.user_id } });

    if (!expenseData) {
      res
        .status(400)
        .json({ message: 'No expenses found' });
      return;
    }

  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/expense/:id', async (req, res) => {
//     try {
  
//         // determine how to find our queries i.e. find all, this would be finding expenses by user primary id key.
  
//       const expenseData = await Expense.findOne({ where:{} } );
  
//       if (!expenseData) {
//         res
//           .status(404)
//           .json({ message: 'No expenses found' });
//         return;
//       }
//     }
//      catch (err) {
//       res.status(400).json(err);
//     }
//   });

router.post('/addexpense/:budgetid', (req, res) => {

  Expense.create({
  ...req.body,
  
  budget_id: req.params.budgetid
})
    .then((newExpense) => {
      res.json(newExpense)
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
