var express = require('express');
var router = express.Router();
var loginController = require('../controllers/login.js');

router.route('/login')
  .get(loginController.getLogin)
  .post(loginController.postLogin);

router.route('/logout')
  .get(loginController.logout);
// !-- Do not remove this line --! //

module.exports = router;
