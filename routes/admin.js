// jshint esversion:8
const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

function middleware(req, res, next) {
  if(req.session.precious) {
    next();
  } else {
    console.log(req.session);
    res.render('admin/401');
  }
}

router.use(middleware);
router.route('/')
  .get(adminController.getIndex);
// router.route('/dashboard')
//   .get(adminController.getDashboard);
router.route('/create-post')
  .get(adminController.getCreatePost)
  .post(adminController.newPost);
router.route('/upload-image')
  .post(adminController.uploadImage);
// !-- Do not remove this line --! //

module.exports = router;
