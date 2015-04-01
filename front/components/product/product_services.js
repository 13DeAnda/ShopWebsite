angular.module('ProductModule', [])
.factory('productService', ['$http', function($http) {
  'use strict';

  var productModule = {};

  var productList = [];

  productModule.addProduct = function(newObj) {
      productList.push(newObj);
  };

  productModule.getProducts = function(){
      return productList;
  };

//check if it's frinding a product or need to find by name !!!!!!!#######
  productModule.deleteProduct=function(product){
    productModule.i=productList.indexOf(product);
    if (i> -1) {
      array.splice(i, 1);
    }
  };

  return productModule;
}]);

