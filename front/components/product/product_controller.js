angular.module('vc.ProductModule.controller', ['AjaxModule','ProductModule'])
.controller('ProductController', ['$scope', '$routeParams', 'ajaxUtil', 'productService',
function($scope, $routeParams, ajaxUtil, productService){

  $scope.qty = 1;

 //gets product id and sends object
  $scope.productId = $routeParams.id;

  $scope.onGetProduct = function(response){
    $scope.product = response.data[0];
  };

  //calls to database
  ajaxUtil.get('/api/products/'+$scope.productId,$scope, "onGetProduct");

  //sending product to service
  $scope.addToCart = function(){
    $scope.product.qty = $scope.qty;
    productService.addProduct($scope.product);
  };
}]);