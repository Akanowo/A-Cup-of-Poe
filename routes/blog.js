var express = require('express');
var router = express.Router();
var blogController = require('../controllers/blog.js');

router.route('/')
  .get(blogController.getIndex);
router.route('/:id')
  .get(blogController.getSinglePost);
router.route('/comment')
  .get((req, res) => {
    res.json({
      Warning: 'Only post request allowed'
    });
  }).post(blogController.createComment);
// !-- Do not remove this line --! //

module.exports = router;
