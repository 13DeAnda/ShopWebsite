angular.module('black.HelperUtilModule.services', [])
.factory('helperUtility', [
  function() {
  'use strict';

  var helperUtilModule = {};

  helperUtilModule.isMobile = function(){
    var mobile = ['iphone','ipad','android','blackberry','nokia','opera mini','windows mobile','windows phone','iemobile']; 
     for (var i in mobile){
        if (navigator.userAgent.toLowerCase().indexOf(mobile[i].toLowerCase()) > 0){
            return true;
        }
     }
    return false;
  };

  return helperUtilModule;
}]);
