var when = require('when');


function getProducts(client){
  return when.promise(function(resolve, reject){
    var query = 'select * from products';

    client.query(query)
      .then(function(products){
        if(products.rows.length > 0){
          resolve({data: products.rows});
        }
        else{
          reject({status: 400, data: {error: "no products available"}});
        }         
      }.bind(this))
      .catch(function(err){
        reject(res.send(err))
      }.bind(this));
  }.bind(this));  
};

function getProduct(client, id){
  return when.promise(function(resolve, reject){
    var query = 'select * from products where did =' + id;

    client.query(query)
      .then(function(products){
        if(products.rows.length > 0){
          var product = products.rows[0];
          resolve({data: product});
        }
        else{
          reject({status: 404, data: {error: "product not found"}});
        }         
      }.bind(this))
      .catch(function(err){
        reject(res.send(err))
      }.bind(this));
  }.bind(this));
};

module.exports = {
  getProducts : getProducts,
  getProduct : getProduct
};
