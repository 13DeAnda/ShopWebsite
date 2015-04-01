angular.module('vc.CartModule.controller', ['AjaxModule', 'ProductModule'])
.controller('CartController', ['$scope', 'ajaxUtil', 'productService',
function($scope, ajaxUtil, productService){

  $scope.products = productService.getProducts();

  $scope.getTotal = function(){
    var total = 0;
    for(var i in $scope.cartList)
      total += $scope.cartList[i].price*$scope.cartList[i].qty;
    return total;
  };

  $scope.total = $scope.getTotal();
}]);