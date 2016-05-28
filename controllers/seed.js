var express = require('express');
var router = express.Router();
var Items = require('../models/chuck.js');

router.get('/', function(req,res){
console.log("seed runs");
Quotes.find({}, function(err, quotes){
		res.send(quotes);
	});
});

router.get('/chuckqoutes', function(req,res){
var chuckQoutes = [
{
	chuck_type: "",
	img: ""
},
{
	chuck_type: "",
	img: ""
},
{
	chuck_type: "",
	img: ""
},
{
	chuck_type: "",
	img: ""
},
{
	chuck_type: "",
	img: ""
},
{
	chuck_type: "",
	img: ""
},
{
	chuck_type: "",
	img: ""
}
];

console.log(chuckQoutes);
Quotes.create(chuckQoutes, function(err) {
  	res.redirect('/seed');
	});
});

module.exports = router;
