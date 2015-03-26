angular.module('necs.CartModule.directives', []).
directive("cartDirective",
[
function(){
  'use strict';

  function linkingFunction(scope, element, attrs){
  scope.element = element;
  }

}
    function controller($scope) {
       ///list of items on the cart
        $scope.cartList=[
            {
            id:1,
            name:"product1",
            price:93,
            qty:2
            }];

        $scope.addToCart=function(product,qty){
           qty=parseInt(qty);

            if(qty<1)
                return;

            //product already exist
            for(var i in $scope.cartList){
                if(product.id == $scope.cartList[i].id){
                    $scope.cartList[i].qty+=qty;
                    $scope.total=$scope.getTotal();
                    return;
                }

            }
            //if product doesnt exist
            product.qty=qty;
            $scope.cartList.push(product);
            $scope.total=$scope.getTotal();

        };
         //update the cart products
        $scope.update=function(){
            var temp=[];

            for(var i in $scope.cartList){
                var idSearch="qtyC"+$scope.cartList[i].id;
                $scope.cartList[i].qty=Number(document.getElementById(idSearch).value);

                if(($scope.cartList[i].qty>0))
                    temp.push($scope.cartList[i]);
            }

            $scope.cartList=temp;
            $scope.total=$scope.getTotal();
        };

        //sums the total
        $scope.getTotal=function(){
            var total=0;
            for(var i in $scope.cartList)
                total+=$scope.cartList[i].price*$scope.cartList[i].qty;
            return total;
        };

        $scope.total=$scope.getTotal();

    }
    return {
        restrict: 'E',
        templateUrl:"cart.html",
        scope: {
            addToCart:'='
        },
        link: linkingFunction,
        controller: controller
    };
});