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


//example to follow to do the API's  
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


var server = app.listen(8000);