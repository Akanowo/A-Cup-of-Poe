const { Post } = require('../models/post.model');
const { Comment } = require('../models/comments.model');

exports.getIndex = (req, res, next) => {
  try {
    Post.find((err, docs) => {
      docs = docs.reverse();
      if(err) {
        console.log(err);
      }
        res.render("user/blog", { posts: docs });
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getSinglePost = (req, res) => {
  const { id } = req.params;
  let posts = Post.find({}).limit(4).sort({'_id': -1}).then(docs => docs);
  let comments = Comment.find({'post_id': id}).then(docs => docs);
  Post.findById({_id: id}, (err, doc) => {
    if(err) {
      console.log(err);
    }
    posts.then(docs => {
      comments.then((documents) => {
        res.render('user/blog-single', { post: doc, title: doc.title, posts: docs, comments: documents });
      });
    });
  });
};

exports.createComment = (req, res) => {
  console.log(req.body);
  Comment.create(req.body).then(comment => {
    res.redirect(`/blog/${req.body.post_id}`);
  }).catch((e) => {
    console.log(e);
  });
};

