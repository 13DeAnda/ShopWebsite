angular.module('ProductModule', [])
.factory('productService', ['$http', function($http) {
  'use strict';
  var productModule = {};
  var productList = [];

  var updateDB=function(){
    console.log("some db handling here");
  };

  productModule.addProduct = function(newObj) {
    //if in the list
    var found=false;
    for(var i in productList){
      if(productList[i].id == newObj.id){
        productList[i].qty += newObj.qty;
        found=true;
      }
    }
    //if a new product
    if(!found){
      productList.push(newObj);
    }

    window.location.replace("#/cart");
  };

  productModule.getProducts = function(){
    return productList;
  };

  productModule.update=function(newList){
    productList=newList;
    alert("changes updated on cart");
    updateDB();
  };
  return productModule;
}]);

