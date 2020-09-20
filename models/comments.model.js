const { Schema, model } = require('mongoose');

const commentSchema = new Schema({
  createdAt: {
    type: String,
    default: new Date().toLocaleString()
  },

  post_id: {
    type: String,
    required: [1, 'Post id is needed']
  },
  name: {
    type: String,
    required: [1, 'Commenter\'s name is required']
  },
  email: {
    type: String,
    required: [1, 'Commenter\'s email is required']
  },
  website: {
    type: String
  },
  comment: {
    type: String,
    required: [1, 'Comment is required']
  }
});

const Comment = model('Comment', commentSchema);

module.exports = { Comment };
