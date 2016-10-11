angular.module('black.ProductModule.services', [])
.factory('productUtility', ['$location', 'navigationUrl', 'ajaxUtil', 'apiUrl',
  function($location, navigationUrl, ajaxUtil, apiUrl) {
  'use strict';

  var productModule = {};

  productModule.navigateToProductDetail = function(id){
      $location.path(navigationUrl.product(id));
  };

  productModule.getProduct = function (id, scope, callbackFunction){
    ajaxUtil.get(apiUrl.product(id), scope, callbackFunction);
  };

  productModule.getProducts = function(scope, callbackFunction){   
    ajaxUtil.get(apiUrl.products(), scope, callbackFunction);
  };

  return productModule;
}]);
