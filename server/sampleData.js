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
var server = app.listen(8000);

function deleteTables(){
  client.query('DROP TABLE IF EXISTS Products', function(err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log("product table deleted");
    }
  });
};

function createTables(){
    client.query('CREATE TABLE Products(id decimal,title varchar(150), price decimal, description text, images text[])', function(err, result) {
      if (err) {
        console.log(err);
      }
      else {
        console.log("Products table created");
      }
     });
};

function addProducts(){
    //do a for each and make an array of queries.
    console.log("gona try to add products");
    client.query('INSERT INTO Products VALUES(345.3, \'moitie shirt\', 344, \'it is made of silk\', Array[\' http://www.lacemarket.us/wp-content/themes/auctionpress/thumbs/495230-1133-2015-10-22488875.jpg\'])', function(err, result) {
      if (err) {
        console.log(err);
      }
     });
};


deleteTables();
createTables();
addProducts();



