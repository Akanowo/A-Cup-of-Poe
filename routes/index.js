// jshint esversion:8
const express = require('express');

const router = express.Router();
const indexController = require('../controllers/index.js');
/* GET home page. */
router.get('/', indexController.getIndex);

module.exports = router;
