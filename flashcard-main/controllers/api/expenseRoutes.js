// change code

const router = require('express').Router();
const { Expense } = require('../../models');

// our 'skeleton' for the get route needs updating
router.post('/'), async (req, res) => {
  try {
    const expenseProject = await expenseProject.create ({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(expenseProject);
  } catch (err) {
    res.status (400).json(err);
  }
});

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
