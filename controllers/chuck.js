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
// router.get('/:id', function(req, res) {
//   console.log(req.params);
//   Quotes.findById(req.params.id, function(err, quotes) {
//     res.render('show.ejs', {quotes});
//   });
// });

// router.route('http://api.icndb.com/jokes/random')
// .post(function(req, res) {
// 	var quotes = new Quotes();
// 	quotes.type = req.body.type;

// 	quotes.save (function(err) {
// 		if (err)
// 			res.send(err);
// 		res.json(quotes);
// 	});
// });

router.get('/:id_random_joke', function(req, res) {
	var id_random_joke = req.params.id_random_joke;
	// var response_data;
	request('http://api.icndb.com/jokes/random' + id_random_joke, function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	console.log('-----------------------------');
	  	console.log('API data below...AHHHHHHHHHHHH');
	  	console.log(body);
	  	console.log('-----------------------------');
	    id_random_joke = req.body;
	    // var response = JSON.parse(body);
	  }
	});
	console.log("please work");
	console.log(id_random_joke);
	res.send(id_random_joke);
});

module.exports = router;