// jshint esversion:8
const express = require('express');
const adminController = require('../controllers/admin');

const router = express.Router();

function middleware(req, res, next) {
  if(!req.user) {
    res.status(401).render('admin/401');
  }
  next();
}

router.route('/')
  .get(adminController.getIndex);
// router.route('/dashboard')
//   .get(adminController.getDashboard);
router.route('/create-post')
  .get(middleware, adminController.getCreatePost)
  .post(middleware, adminController.newPost);
router.route('/upload-image')
  .post(middleware, adminController.uploadImage);
// !-- Do not remove this line --! //

module.exports = router;
