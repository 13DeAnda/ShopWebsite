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

  //would check or uncheck all
  $scope.checkAll=function(){
    if($scope.all)
      for(var i in $scope.products){
        $scope.products[i].checked=true;
      }
    else
      for(var j in $scope.products){
        $scope.products[j].checked=false;
      }
  };

  $scope.update=function(){
    var newProducts = [];
    for(var i in $scope.products){
      //checks to delete
      if(!$scope.products[i].checked){
        //checks to update qty
        var idName ="qty"+$scope.products[i].id;
        var newQty = document.getElementById(idName);

        if(newQty !== null){
          if($scope.products[i].qty != newQty.value){
            $scope.products[i].qty = newQty.value;
          }
        }
        newProducts.push($scope.products[i]);
      }
    }
    $scope.products = newProducts;
    productService.update($scope.products);
    newProducts=[];
  };
}]);

