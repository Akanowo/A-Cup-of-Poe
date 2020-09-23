const passport = require('passport');
const { Strategy } = require('passport-local');
const { Admin } = require('../../models/admin.model');

module.exports = function localStrategy() {
  passport.use(new Strategy(
    {
      usernameField: 'email',
      passwordField: 'password'
    }, (email, password, done) => {
      Admin.findOne({ email: email }, (err, admin) => {
        try {
          if (err) throw err;
        } catch (e) {
          done(e, false);
          console.log(e);
        }
        
        if (admin) {
          if (password === admin.password) {
            done(null, admin._id);
          } else {
            done(null, false);
          }
        } else {
          done(null, false);
        }
      });
    }
  ));
}