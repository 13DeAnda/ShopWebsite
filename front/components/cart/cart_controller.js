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

  $scope.update=function(){
    var newProducts = [];
    for(var i in $scope.products){
      //checks to delete
      if($scope.products[i].checked){
        break;
      }
      //checks to update qty
      var idName="qty"+$scope.products[i].id;
      var newQty = document.getElementById(idName).value;

      if($scope.products[i].qty != newQty){
        $scope.products[i].qty = newQty;
      }

      newProducts.push($scope.products[i]);
    }

    $scope.products = newProducts;
    productService.update();
  };
}]);