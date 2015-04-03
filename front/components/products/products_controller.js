angular.module('vc.ProductsModule.controller', ['AjaxModule', 'ProductModule'])
.controller('ProductsController', ['$scope','ajaxUtil', 'productService',
function($scope, ajaxUtil,productService){

  $scope.onGetProducts = function(response){
    $scope.products = response.data;
  };

  $scope.addToCart = function(product){
    productService.addProduct(product);
  };

  $scope.isClicked=function(id){
    window.location.replace("#/products/id");
  };
  ajaxUtil.get('/api/products',$scope, "onGetProducts");
}]);