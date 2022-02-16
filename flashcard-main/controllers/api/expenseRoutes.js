// change code

const router = require('express').Router();
const { Expense } = require('../../models');

// our 'skeleton' for the get route needs updating
router.get('/', async (req, res) => {
  try {
      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/expense', async (req, res) => {
  try {

      // determine how to find our queries i.e. find all, this would be finding expenses by user primary id key.

    const expenseData = await Expense.findAll({ where: { email: req.body.email } });

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

router.get('/expense/:id', async (req, res) => {
    try {
  
        // determine how to find our queries i.e. find all, this would be finding expenses by user primary id key.
  
      const expenseData = await Expense.findOne({ where: { email: req.body.email } });
  
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

  // needs to be completed
router.post('/expense', (req, res) => {
});

module.exports = router;
