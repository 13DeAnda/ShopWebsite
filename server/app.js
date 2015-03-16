var express = require('express');
var path = require('path');
var mongoose  = require('mongoose');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var db = require('./db')();
var Product = require('./product');

var app = express();
app.use(express.static(path.resolve(__dirname + '/../front/static')));

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var server = app.listen(8000);

mongoose.connect(db);
db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
    console.log('connected successfully');
});


//get products
app.get('/api/products',function(req,res){
  Product.find({}, function(err, products){
    res.send(products);
  });
});

//get an specific product
app.get('/api/products/:id',function(req,res){
  var id= req.params.id;
  Product.find({id:id}, function(err, product){
    if(err){
        return res.send(err);
    }
    res.send(product);
  });
});