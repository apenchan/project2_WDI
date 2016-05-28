var express = require('express');
var app = express();
var logger = require('morgan');
var bodyParser = require('body-parser');
var db = process.env.MONGODB_URI || "mongodb://localhost/Chuck"//this is the data base, user_app_dev
var methodOverride = require('method-override');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;

app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));
app.use(methodOverride(function(req, res){
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    var method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
