const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blog.js');

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
