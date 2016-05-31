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

//New
router.get('/new', function (req, res) {
	res.render('new.ejs');
});

//CREATE
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

//to API
router.get('/random_joke', function(req, res) {
	// var id_random_joke = req.params.id_random_joke;
	var random_joke = null;
	request('http://api.icndb.com/jokes/random', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	  	// console.log('-----------------------------');
	  	// console.log('API data below...AHHHHHHHHHHHH');
	  	// console.log(body);
	  	// console.log('-----------------------------');
	  	var x = JSON.parse(response.body);
	  	console.log(typeof x);
	    random_joke = {
	    	type: x.type,
	    	id: x.value.id,
	    	joke: x.value.joke
	    }
	    // console.log(random_joke);
	    console.log(random_joke);
	    // res.render('home.ejs', {random_joke});
	    // var response = JSON.parse(body);

	  }
	});
	// console.log("please work");
	// console.log(random_joke);
	// res.json(random_joke);
});

//SHOW
router.get('/:id', function(req, res) {
  console.log(req.params.id);
  Quotes.findById(req.params.id, function(err, quotes) {
  	console.log(quotes);
    res.render('show.ejs', {quotes});
  });
});

//EDIT
router.get('/:id/edit',function(req, res){
  Quotes.findById(req.params.id, function(err, quotes){
  	console.log(quotes);
    res.render('edit.ejs', {quotes});
  });
});

router.put('/:id', function(req,res){
	var query = {"_id": req.params.id};
	Quotes.findOneAndUpdate(query, req.body, function(err, quotes){
		if (err) {
			console.log(err); 
		} else {
			res.redirect('/chuck');
		}
	});
});

//Delete
router.delete('/:id', function(req, res){
	console.log(req.params.id);
  Quotes.findByIdAndRemove(req.params.id, function(){
      res.redirect('/chuck');
  });
});

module.exports = router;