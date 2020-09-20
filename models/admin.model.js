const {Schema, model } = require('mongoose');

const adminSchema = new Schema({
  email: {
    type: String,
    required: [1, 'Email address is required']
  },
  password: {
    type: String,
    required: [1, 'Password is required'] 
  }
})

const Admin = model('Admin', adminSchema);

module.exports = { Admin };
