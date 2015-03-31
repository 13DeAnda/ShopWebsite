var mongoose = require('mongoose');

module.exports = mongoose.model('User', {

  username: String,
  password:String,
  cart: [{
    id: Number,
    name: String,
    description: String,
    brand: String,
    price: Number,
    qty:Number,
    image:String
  }],

});