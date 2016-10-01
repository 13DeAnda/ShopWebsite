//TODO:   move into single datastores the user and product, do schemas for data entry, separate into helper functions what could be necessary.

var express = require('express');
var path = require('path');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var when = require('when');

var pg = require('pg');
var db_config = require('./db');

var app = express();
app.use(expressSession({secret: 'key'}));
app.use(express.static(path.resolve(__dirname + '/../front/static')));

app.get('/', function(req, res) {
	res.sendfile('index.html');
});


// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Connect to database
var client = new pg.Client(db_config);

client.connect(function (err) {
  if (err) throw err;

  console.log('connected');
});


app.get('/api/products', function(req, res) {
 	return when.promise(function(resolve, reject){
  	var query = 'select * from products';

  	client.query(query)
  		.then(function(products){
  			if(products.rows.length > 0){
  				resolve(res.send({data: products.rows}));
  			}
  			else{
  				reject(res.send(400, {error: "no products available"}));
  			}					
  		}.bind(this))
  		.catch(function(err){
  			reject(res.send(err))
  		}.bind(this));
	}.bind(this));
});


app.get('/api/product/:id', function(req, res) {
  return when.promise(function(resolve, reject){
  	var id = req.params.id;
  	var query = 'select * from products where did =' + id;

  	client.query(query)
  		.then(function(products){
  			if(products.rows.length > 0){
  				var product = products.rows[0];
  				resolve(res.send({data: product}));
  			}
  			else{
  				reject(res.send(404, {error: "product not found"}));
  			}					
  		}.bind(this))
  		.catch(function(err){
  			reject(res.send(err))
  		}.bind(this));
	}.bind(this));
});

app.get('/api/user/login', function(req, res) {
	return when.promise(function(resolve, reject){
		var username = req.body.username;
  	var password = req.body.password;
  	var query = 'select * from Users WHERE username = \''+ username + "\'";

  	client.query(query)
  		.then(function(users){
  			if(users.rows.length > 0){
  				var user = users.rows[0];
  				if(user.password === password){
  					resolve(res.send({data: user}));
  				}
  				else{
  					reject(res.send(400, {error: "invalid password"}));
  				}			
  			}
  			else{
  				reject(res.send(400, {error: "user not found"}));
  			} 			
  		}.bind(this))
  		.catch(function(err){
  			reject(res.send(err))
  		}.bind(this));
	}.bind(this));
});

/// modify to promise.when.all 
app.post('/api/user/register', function(req, res) {
	return when.promise(function(resolve, reject){
		var username = req.body.username;
  	var password = req.body.password;
  	
  	var query = 'select * from Users WHERE username = \''+ username + "\'";
  	var queryPost = 'INSERT INTO Users VALUES( \''+ username + '\', \'' + password +'\', Array[0])';
  	
  	if(!username || !password){
  		reject(res.send(400, {error: "not username or password sent"}));	
  	}
  	client.query(query)
  		.then(function(users, err){
  			if(err){
  				reject(res.send(400, {error: "database error"}));	
  			}
  			else if(users.rows.length > 0 ){
  				reject(res.send(400, {error: "username already exist"}));		
  			}
  			return client.query(queryPost)
  		}.bind(this))
  		.then(function(newUser, err){
  			if(err){
  				reject(res.send(400, {error: "database error"}));	
  			}
  			else{
  				resolve(res.send({data: newUser.rows}));
  			}
  		}.bind(this))
  		.catch(function(err){
  			reject(res.send(err))
  		}.bind(this));
	}.bind(this));
});



var server = app.listen(8000);