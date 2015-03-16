var http = require('http');
var mongoose  = require('mongoose');
var express = require('express');

//importing the scheemas of the object
var product = require('./product');

var app = express();

var db;
var config = {
  "USER": "",
  "PASS": "",
  "HOST": "127.0.0.1",
  "PORT": "27017",
  "DATABASE" : "vc"
};

var dbPath  = "mongodb://" + config.USER + ":"+ config.PASS + "@"+ config.HOST + ":"+ config.PORT + "/"+ config.DATABASE;

mongoose.connect(dbPath);

db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("connected successfully");

  generateProductData();
});

var testSchema = mongoose.Schema({
  name: String
});

var Test = mongoose.model('Test', testSchema);

console.log("Starting app");
app.listen(8080);
console.log("Started on 8080...");

function generateProductData(){
  console.log("--generating product Data--");
  var Product = mongoose.model('Product',product);

  var dress1 = new Product({
    id: 1,
    name: "La vie jsk",
    description: "",
    brand: "baby the stars shine bright",
    price:340,
    stock:2,
    image:"/assets/images/products/1.jpg"
  });
  dress1.save();

  var dress2 = new Product({
    id: 2,
    name: "maria",
    description: "",
    brand: "baby the stars shine bright",
    price:456,
    stock:2,
    image:"/assets/images/products/2.jpg"
  });
  dress2.save();
}


