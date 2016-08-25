var express = require('express');
var path = require('path');
var expressSession = require('express-session');
var bodyParser = require('body-parser');
var _ = require('lodash');
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
    client.query('CREATE TABLE Products(did integer, title varchar(150), price decimal, description text, images text[])', function(err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Products table created");
        }
     });
};

var products = [
  {
    title: "moitie cathedralskirt",
    price: "564",
    description: "more descriptions to come...",
    images: ["http://ic.pics.livejournal.com/diaforos_ad/45177959/3010/3010_600.jpg"]
  },
  {
    title: "moitie navy baby op",
    price: "234",
    description: "more descriptions to come...",
    images: ["http://data.whicdn.com/images/21702355/large.jpg"]
  },
  {
    title: "holly cross",
    price: "456",
    description: "more descriptions to come...",
    images: ["https://c1.staticflickr.com/9/8214/8253627577_c2f5f69dfc.jpg"]
  },
  {
    title: "black peace now",
    price: "456",
    description: "more descriptions to come...",
    images: ["https://c1.staticflickr.com/9/8214/8253627577_c2f5f69dfc.jpg"]
  }
];

function addProducts(){
    //do a for each and make an array of queries.
    console.log("adding products");
    _.forEach(products, function(product, index){
        var id = index+1;
        var query = 'INSERT INTO Products VALUES('+id+ ',\'' +product.title + '\','+ product.price+ ','+ '\'' +product.description + '\','+'Array[';

        _.forEach(product.images, function(image, index){
            query += '\''+ image + '\'';
            if(product.images.length < index+1){
                query+= '\'';
            }
        });
        query += '])';
        
      client.query(query, function(err, result) {
            if (err) {
              console.log(err);
            }
        });
    });
};


deleteTables();
createTables();
addProducts();



