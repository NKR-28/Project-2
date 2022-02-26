// make a create signup route

const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {

    res.render('homepage', {
      logged_in: req.session.logged_in 
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

//rename path or doublecheck
router.get('/budget', withAuth, async (req, res) => {
  try {
    
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    const user = userData.get({ plain: true });
    //expenses.findAll to update items in the database
    
    const items = ["apples", "movie", "uber", "food"]
    res.render('budget', {
      ...user,
      items,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/budget/:id',(req, res) =>{
  req.params.id

})

//double check the sytax, this is out redirect id not loggin in statement
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/budget');
    return;
  }

  res.render('login');
});

module.exports = router;
