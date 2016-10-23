angular.module('black.CartModule.services', [])
.factory('cartUtility', ['$location', 'navigationUrl', 'ajaxUtil', 'apiUrl',
  function($location, navigationUrl, ajaxUtil, apiUrl) {
  'use strict';

  var cartModule = {};

  cartModule.getUserCart = function(uuid, scope, callbackFunction){
    ajaxUtil.get(apiUrl.cart(uuid), scope, callbackFunction);
  };
  cartModule.addToCart = function (uuid, data, scope, callbackFunction){
    ajaxUtil.post(apiUrl.cart(uuid), data, scope, callbackFunction);
  };
  cartModule.updateCart = function (uuid, data, scope, callbackFunction){
    ajaxUtil.put(apiUrl.cart(uuid), data, scope, callbackFunction);
  };
  cartModule.deleteFromCart = function (uuid, data, scope, callbackFunction){
    ajaxUtil.delete(apiUrl.cart(uuid), data, scope, callbackFunction);
  };
  return cartModule;
}]);
