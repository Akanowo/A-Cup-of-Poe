var express = require('express');
var router = express.Router();
const passport = require('passport');
var loginController = require('../controllers/login.js');

router.route('/login')
  .get(loginController.getLogin)
  .post(passport.authenticate('local'), (req, res) => {
    res.json({ authMessage: 'Login Successful' })
  });

router.route('/logout')
  .get(loginController.logout);
// !-- Do not remove this line --! //

module.exports = router;
