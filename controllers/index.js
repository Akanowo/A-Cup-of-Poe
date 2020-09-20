// jshint esversion:8
const { Post } = require('../models/post.model');
exports.getIndex = (req, res) => {
  Post.find({}).limit(4).sort({'_id': -1}).then(docs => res.render('user/home', { posts: docs })).catch((e) => console.log(e));
  
};
