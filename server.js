var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var db = process.env.MONGODB_URI || "mongodb://localhost/Chuck"//this is the data base, user_app_dev
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;