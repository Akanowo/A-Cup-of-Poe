var express = require('express');
var router = express.Router();
const passport = require('passport');
var loginController = require('../controllers/login.js');

router.route('/login')
  .get(loginController.getLogin)
  .post(passport.authenticate('local', {
    successRedirect: '/admin/create-post',
    failureRedirect: '/accounts/login'
  }));

router.route('/logout')
  .get(loginController.logout);
// !-- Do not remove this line --! //

module.exports = router;
