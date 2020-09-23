// jshint esversion:8
const express = require('express');
const viewConfig = require('./config/view');
const errorConfig = require('./config/error');
const utilitiesConfig = require('./config/utilities');
const routesConfig = require('./config/routes');

const app = express();

viewConfig(app);
utilitiesConfig(app);
routesConfig(app);
errorConfig(app);

module.exports = app;
