// jshint esversion:8
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cookieParser = require('cookie-parser');
const debug = require('debug')('essential-living:utilities');
const mongoose = require('mongoose');
const session = require('express-session');
const helmet = require('helmet');


const sess = {
  secret: 'essential living',
  resave: false,
  saveUninitialized: true,
  cookie: {}
};

module.exports = (app) => {
  if (app.get('env') === 'production') {
    app.set('trust proxy', 1); // trust first proxy
    sess.cookie.secure = true; // serve secure cookies
    app.use(helmet());
    app.use(logger('tiny'));
  }

  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV === 'development') {
    mongoose.connect(process.env.mongoClientUrl_dev, {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
      if(err) {
        debug(`Could not connect to db: ${err}`);
      }
    }).then((client) => {
      debug('DB connected successfully');
    }).catch((err) => {
      console.log(`An error occured while connecting to db ${err}`);
    });
    app.use(logger('dev'));
  } else {
    mongoose.connect('mongodb+srv://Anonymous:pa$$w0rd1234,.@acupofpoe.tpo86.mongodb.net/acupofpoe?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}, (err) => {
      if(err) {
        debug(`Could not connect to db: ${err}`);
      }
    }).then((client) => {
      debug('DB connected successfully');
    }).catch((err) => {
      console.log(`An error occured while connecting to db ${err}`);
    });
  }
  

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(session(sess));
  app.use(express.static(path.join(__dirname, '..', 'public')));
  app.use('/css', express.static(path.join(__dirname, '..', 'public/stylesheets')));
  app.use('/css', express.static(path.join(__dirname, '..', 'public/revolution/css')));
  app.use('/js', express.static(path.join(__dirname, '..', 'public/javascripts')));
  app.use('/js', express.static(path.join(__dirname, '..', 'public/revolution/js')));
  app.use('/images', express.static(path.join(__dirname, '..', 'public/images')));
  app.use('/public', express.static(path.join(__dirname, '..', 'public')));
};
