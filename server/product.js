var mongoose = require('mongoose');

module.exports = mongoose.model('Product', {

    id: Number,
    name: String,
    description: String,
    brand: String,
    price: Number,
    stock:Number,
    image:String

});