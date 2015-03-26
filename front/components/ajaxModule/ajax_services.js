angular.module('AjaxModule', [])
.factory('ajaxUtil', ['$http', function($http) {
  'use strict';

  var ajaxModule = {};

  ajaxModule.get = function(path, scope, callback) {
    return $http.get(path).then(scope[callback]);
  };

  ajaxModule.post = function(path, data, scope, callback) {
    return $http.post(path, data).then(scope[callback]);
  };

  ajaxModule.put = function(path, data, scope, callback) {
    return $http.put(path, data).then(scope[callback]);
  };

  ajaxModule.delete = function(path, scope, callback) {
    return $http.delete(path).then(scope[callback]);
  };

  return ajaxModule;
}]);
