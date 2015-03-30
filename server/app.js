var express = require('express');
var path = require('path');
var mongoose  = require('mongoose');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var passport = require('passport');
var flash = require('connect-flash');
var db = require('./db')();
var User=require('./user');
var Product = require('./product');
var passportConfig = require('./passportStratery');

var app = express();
app.use(expressSession({secret: 'key'}));
app.use(express.static(path.resolve(__dirname + '/../front/static')));

//login
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//

app.get('/', function(req, res) {
	res.sendfile('index.html');
});

app.get('/login', function(req, res) {
  res.sendfile('login.html');
});

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


passportConfig(passport, User);

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

//get a specific product
app.get('/api/products/:id',function(req,res){
  var id= req.params.id;
  Product.find({id:id}, function(err, product){
    if(err){
        return res.send(err);
    }
    res.send(product);
  });
});

//log a user in.

app.post('/login', passport.authenticate('login', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
}));

app.post('/signup', passport.authenticate('signup', {
    successRedirect: '/',
    failureRedirect: '/login',
    failureFlash: true
  })
);


function requireAuthentication(req, res, callback) {
    if (req.isAuthenticated()) {
        return callback();
    }

    console.log('authentication failed');
    res.redirect('/login');
}