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
      // User findall method select user_id from expense table
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

router.get('/expense/:id', async (req, res) => {
    try {
  
        // determine how to find our queries i.e. find all, this would be finding expenses by user primary id key.
  
      const expenseData = await Expense.findOne({ where:{} } });
  
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

  Expense.create({
    Category_id: req.body//.whatever we end up calling the element that contains this0,
    ,
    dollerAmount: req.body//.whatever this element is called
    ,
    user_id: req.session.user_id
  })
    .then((newExpense) => {
      // Send the newly created row as a JSON object
      res.json(newExpense
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
