// READ budget

const sequelize = require('../../config/connection');

const router = require('express').Router();
const { User, Budget, Expense } = require('../../models');

// our 'skeleton' for the get route needs updating
router.get('/', async (req, res) => {
    try {
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.get('/current', async (req, res) => {
    try {

        const budgetData = await Budget.findall({
            where: { user_id: req.session.user_id },

            include: [{ model: User }, { model: Expense }],
            attributes: {
                include: [
                    [

                        sequelize.literal(
                            '(SELECT SUM(dollarAmount) FROM Expense WHERE expense.budget_id = budget.budget_id)'
                        ),
                        'spent',
                    ],
                ],
                exclude: [

                ]
            },
        });
        res.status(200).json(budgetData);

    } catch (err) {
        res.status(400).json(err);
    }
});

// CREATE budgets 
router.post('/addbudget', (req, res) => {

    Budget.create({
        ...req.body,

        user_id: req.session.user_id
    })
        .then((newBudget) => {
            res.json(newBudget);
            // res.render('currentBudgets');
        })
        .catch((err) => {
            res.json(err);
        });
});

router.get('/:id', async (req, res) => {
    try {

        const budgetid = await Budget.findOne({
            where: { id: req.params.id }
        })
        if (budgetid){

            res.render('expense');
        }
     } catch (err)
     {
        res
        .status(400)
        .json({ message: 'Budget does not exist' });
      return;
    }
});
module.exports = router;

