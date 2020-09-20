const { Schema, model } = require('mongoose');

const postSchema = new Schema({
  title: {
    type: String,
    required: [1, 'Post title is required']
  },
  content: {
    type: String,
    required: [1, 'Post content is required']
  },
  imageUrl: {
    type: String
  },
  createdAt: {
    type: Date,
    default: new Date().toLocaleString()
  }
});

const Post = model('Post', postSchema);

module.exports = { Post };
