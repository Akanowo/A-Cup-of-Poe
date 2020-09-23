const { Admin } = require('../models/admin.model');

exports.getLogin = (req, res, next) => {
  res.render('admin/login');
};


exports.logout = (req, res, next) => {
  req.logout();
  res.redirect('/accounts/login');
};

