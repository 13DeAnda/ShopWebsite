angular.module('black.UserModule.services', [])
.factory('userUtility', ['$location', 'navigationUrl', 'ajaxUtil', 'apiUrl',
  function($location, navigationUrl, ajaxUtil, apiUrl) {
  'use strict';

  var userModule = {};

   userModule.login = function (username, password, scope, callbackFunction){
    ajaxUtil.get(apiUrl.login(username, password), scope, callbackFunction);
  };

   userModule.register = function (loginData, scope, callbackFunction){
    ajaxUtil.post(apiUrl.register(), loginData, scope, callbackFunction);
  };

  return userModule;
}]);
