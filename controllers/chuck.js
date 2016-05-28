var express = require('express');
var router = express.Router();
var Quotes = require('../models/chuck.js');

router.get('/', function(req,res){
    console.log('testing index');
    Quotes.find(function(err,items){
        console.log(quotes);
        // res.json(quotes);
    res.render('index.ejs', {quotes});
    });
});


module.exports = router;