const { Admin } = require('../models/admin.model');

exports.getLogin = (req, res, next) => {
  res.render('admin/login');
};

exports.postLogin = (req, res, next) => {
  const { email, password } = req.body;
  Admin.findOne({ email: email }, (err, admin) => {
    if (err) {
      throw err;
    }

    if (admin) {
      if (password === admin.password) {
        req.session.precious = admin._id;
        res.send('valid')
      } else {
        res.send('invalid credentials');
      }
    } else {
      res.send(null);
    }

  });
};

exports.logout = (req, res, next) => {
  req.session.destroy();
  res.redirect('/accounts/login');
};

