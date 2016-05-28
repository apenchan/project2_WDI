var express = require('express');
var router = express.Router();
var Quotes = require('../models/chuck.js');

router.get('/', function(req,res){
console.log("seed runs");
Quotes.find({}, function(err, quotes){
		res.send(quotes);
	});
});

router.get('/chuckqoutes', function(req,res){
var chuckQoutes = [
{
	chuck_type: "Awkward",
	img: "http://cdn2.hubspot.net/hub/314845/file-1006856750-jpg/blog-files/chuck_norris.jpg"
},
{
	chuck_type: "Ninja",
	img: "http://lh5.ggpht.com/-CjLhjsUxseo/URgL5CrpaqI/AAAAAAAAnIY/ZO7Un56I29k/s9000/chuck%2Bnorris.jpg"
},
{
	chuck_type: "Strong",
	img: "http://www.celebritymeasurement.com/wp-content/uploads/2014/01/chuck-norris-weight.jpg"
},
{
	chuck_type: "Sad",
	img: "http://3.bp.blogspot.com/-YZvHiC-QImc/T6qv8ydtyfI/AAAAAAAADWY/_kQMPcKVmSI/s1600/chuckface.jpg"
},
{
	chuck_type: "American",
	img: "http://www.angryheroes.com/sites/default/files/styles/battle_fighter/public/chucknorris.jpg?itok=OZJAenAb"
},
{
	chuck_type: "Sexy",
	img: "http://4.bp.blogspot.com/-md-Lb5axz80/UEeI7BiasII/AAAAAAAAAZs/kxCMFXkOzrU/s1600/chuck+norris+shirtless.jpg"
},
{
	chuck_type: "Manly",
	img: "http://img.pandawhale.com/51162-When-Chuck-Norris-slices-onion-1Muw.jpeg"
}
];

console.log(chuckQoutes);
Quotes.create(chuckQoutes, function(err) {
  	res.redirect('/seed');
	});
});

module.exports = router;
