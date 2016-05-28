var express = require('express');
var router = express.Router();
var request = require('request');
var Quotes = require('../models/chuck.js');

router.get('/', function(req,res){
    console.log('testing index');
    Quotes.find(function(err,quotes){
        console.log(quotes);
        // res.json(quotes);
    res.render('index.ejs', {quotes});
    });
});

router.get('/new', function (req, res) {
	res.render('new.ejs');
});

router.post('/', function(req, res) {
  console.log(req.body);
  var quotes = new Quotes(req.body);
  quotes.save(function(err) {
    if(err) {
      console.log(err);
    } else {
      console.log('New chuck saved');
      res.redirect('/chuck');
    }
  });
});

//Show
router.get('/:id', function(req, res) {
  console.log(req.params);
  Quotes.findById(req.params.id, function(err, quotes) {
    res.render('show.ejs', {quotes});
  });
});

// router.get('/:sw_planet_id', function(req, res) {
// 	var sw_planet_id = req.params.sw_planet_id;
// 	var response_data;
// 	request('http://swapi.co/api/planets/' + sw_planet_id, function (error, response, body) {
// 	  if (!error && response.statusCode == 200) {
// 	  	console.log('-----------------------------');
// 	  	console.log('API data below...');
// 	  	console.log(body);
// 	  	console.log('-----------------------------');
// 	    response_data = body;
// 	  }
// 	});
// 	console.log(response_data);
// 	res.json(response_data);
// });


module.exports = router;