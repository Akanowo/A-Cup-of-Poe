// jshint esversion:8
const formidable = require('formidable');
const fs = require('fs');
const { Post } = require('../models/post.model');

exports.getIndex = (req, res) => {
  res.render('admin/404');
};

// exports.getDashboard = (req, res) => {
//     res.render('admin/index');
// };

exports.getCreatePost = (req, res) => {
  console.log(req.user);
  res.render('admin/new-post');
};

exports.uploadImage = (req, res) => {
  const formData = new formidable.IncomingForm();
  formData.parse(req, (err, fields, files) => {
    const oldPath = files.image.path;
    const newPath = `public/images/blog-uploads/${files.image.name}`;
    fs.rename(oldPath, newPath, (error) => {
      res.send(`/${newPath}`);
    });
  });
};

exports.newPost = (req, res) => {
  console.log(req.body);
  const { title, content, imageUrl } = req.body;
  Post.create({
    title,
    content,
    imageUrl
  }).then((doc) => {
    console.log(doc);
    res.send('Post created');
  }).catch((err) => {
    console.log(err);
    res.status(400).send('Could not create post');
  });
};

// exports.post = (req, res, next) => {
//   //
// };
