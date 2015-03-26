angular.module('necs.ProductModule.controller', ['AjaxModule'])
.controller('ProductController', ['$scope','$routeParams','ajaxUtil',

function($scope,$routeParams,ajaxUtil){

  $scope.productId =$routeParams.id;
  $scope.onGetProduct = function(response){
    $scope.product=response.data[0];
  };

  ajaxUtil.get('/api/products/'+$scope.productId,$scope, "onGetProduct");
}]);