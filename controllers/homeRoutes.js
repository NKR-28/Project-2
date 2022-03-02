// make a create signup route

const router = require('express').Router();
const { User, Budget, Expense } = require('../models');
const withAuth = require('../utils/auth');
// const { Budget } = require('../models');

//rename path or doublecheck
router.get('/budget', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });
    
    res.render('budget', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/budget/:id',(req, res) =>{
  req.params.id;
  console.log(res);

});

//double check the sytax, this is out redirect id not loggin in statement
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/budget');
    return;
  }

  res.render('login');
});

router.get('/currentbudgets', async (req, res) => {
  try{

    const budgetData = await Budget.findAll({
       where: { user_id: req.session.user_id },
      });
    
      const budgets = budgetData.map( budgetRow => budgetRow.get({plain:true}) );
    
    res.render('currentBudgets', {budgets,});

  } catch (err) {
    res.status(500).json('something went wrong');
  } 
    
  });
router.get('/', async (req, res) => {
  try {

    res.render('homepage', {
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});
  
  
module.exports = router;
