var express = require('express');
var path = require('path');
var expressSession = require('express-session');
var bodyParser = require('body-parser');

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


//ALL of this api should have it's own file users, products etc...
app.get('/users', function(req, res) {
  client.query('select * from users', function(err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result.rows)
    }
  });
});

app.get('/api/products', function(req, res) {
  client.query('select * from products', function(err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result.rows)
    }
  });
});

//get a single product
app.get('/api/product/:id', function(req, res) {
  var id = req.params.id;
  var query = 'select * from products where did =' + id;
  
  client.query(query, function(err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.send(result.rows)
    }
  });
});

app.get('/api/user/login', function(req, res) {
  var username = req.query.username;
  var password = req.query.password;

  var query = 'select * from Users WHERE username = \''+ username + "\'AND password= \'" + password + "\'";

  console.log("the query", query);
  client.query(query, function(err, result) {
    if (err) {
      console.log(err);
      res.send(400);
    }
    else {
      res.send(result.rows[0])
    }
  });
});

/// modify to promise.when.all 
app.post('/api/user/register', function(req, res) {
  var username = req.body.username;
  var password = req.body.password;

  var queryGet = 'select * from Users WHERE username = \''+ username + "\'AND password= \'" + password + "\'";
  var queryPost = 'INSERT INTO Users VALUES( \''+ username + '\', \'' + password +'\', Array[0])';

  client.query(queryGet, function(err, result) {
    if (err) {
      console.log(err);
      res.send(400);
    }
    else if(result.rows.length === 0){
      client.query(queryPost, function(error, result){
        if(error){
          console.log("error trying to add user", error);
          res.send(400);
        }
        else{
          res.send(200);
        }
      });
    }
    else{
      res.send({error: "not unique username"});
    }
  });
});


var server = app.listen(8000);