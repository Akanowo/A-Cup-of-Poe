// jshint esversion:8
const indexRouter = require('../routes/index');
const adminRouter = require('../routes/admin');
var blogRouter = require('../routes/blog');
var loginRouter = require('../routes/login');

module.exports = (app) => {
  app.use('/', indexRouter);
  app.use('/admin', adminRouter);
  app.use('/blog',blogRouter);
  app.use('/accounts',loginRouter);
    // !-- Do not remove this line --! //

  app.get('*', (req, res) => {
    res.render('admin/404');
  });
};