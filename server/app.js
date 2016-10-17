var express = require('express');
var path = require('path');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var when = require('when');

//datastores
var user = require('./dataStores/user_datastore.js')
var product = require('./dataStores/product_datastore.js')

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

    product.getProducts(client)
      .then(function(products){
          resolve(res.send(products));      
      }.bind(this))
      .catch(function(err){
        reject(res.status(err.status).send(err.data));
      }.bind(this));
  }.bind(this));
});

app.get('/api/product/:id', function(req, res) {
  return when.promise(function(resolve, reject){
  var id = req.params.id;

   product.getProduct(client, id)
      .then(function(product){
          resolve(res.send(product));      
      }.bind(this))
      .catch(function(err){
        reject(res.status(err.status).send(err.data));
      }.bind(this));
  }.bind(this));
});

app.get('/api/user/login', function(req, res) {
  return when.promise(function(resolve, reject){
    var username = req.query.username;
    var password = req.query.password;

    if(!username || !password){
      reject(res.status(401).send({error: "missing input"}));
    }

    user.login(client, username, password)
      .then(function(loginData){
          resolve(res.send(loginData));
  
      }.bind(this))
      .catch(function(err){
        reject(res.status(err.status).send(err.data));
      }.bind(this));
  }.bind(this));
});

app.post('/api/user/register', function(req, res) {
  return when.promise(function(resolve, reject){
    var username = req.body.username;
    var password = req.body.password;
    var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

    //ALL of these shall be moved into schema tester
    if(!username || !password){
      reject(res.status(400).send({error: "not username or password sent"}));  
    }
    else if(username.length < 6 ||  username.length > 11){
      reject(res.status(400).send({error:"username should be between 6 and 11 characters"}));
    }
    else if(!password.match(regex)){
      reject(res.status(400).send({error: "password should contain a minimum of 8 characters at least 1 Alphabet and 1 Number"}));
    }

    user.register(client, username, password)
      .then(function(loginData){
          resolve(res.send(loginData));
      }.bind(this))
      .catch(function(err){
        reject(res.status(err.status).send(err.data))
      }.bind(this));
  }.bind(this));
});




var server = app.listen(8000);
