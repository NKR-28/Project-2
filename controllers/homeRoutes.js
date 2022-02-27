// make a create signup route

const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

//rename path or doublecheck
router.get('/', withAuth, async (req, res) => {
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
  req.params.id

});

//double check the sytax, this is out redirect id not loggin in statement
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
