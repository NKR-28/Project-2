// READ budget


const router = require('express').Router();
const { Budget } = require('../../models');

// our 'skeleton' for the get route needs updating
router.get('/', async (req, res) => {
    try {
        res.status(200).json(userData);
    }
    catch (err) {
        res.status(400).json(err);
    }
});

router.get('/budget', async (req, res) => {
    try {

        const budgetData = await Budget.findAll({ where: { user_id: req.session.user_id } });

       
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
            res.json(newBudget)
        })
        .catch((err) => {
            res.json(err);
        });
});

module.exports = router;

