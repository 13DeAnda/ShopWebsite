var mongoose = require('mongoose');

module.exports = mongoose.model('User', {

  user: String,
  password:String,
  cart: [{
    id: Number,
    name: String,
    description: String,
    brand: String,
    price: Number,
    stock:Number,
    image:String
  }],

});