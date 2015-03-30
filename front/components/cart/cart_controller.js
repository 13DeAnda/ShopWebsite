angular.module('necs.CartModule.controller', ['AjaxModule'])
.controller('CartController', ['$scope','ajaxUtil',
function($scope, ajaxUtil){

    $scope.products=[
    {
      id: 2,
      name: "maria",
      description: "",
      brand: "baby the stars shine bright",
      price:456,
      qty:1,
      image:"/assets/images/products/2.jpg",
    }
    ];

  //sums the total
  $scope.getTotal=function(){
      var total=0;
      for(var i in $scope.cartList)
          total+=$scope.cartList[i].price*$scope.cartList[i].qty;
      return total;
  };

  $scope.total=$scope.getTotal();

    $scope.onGetProducts = function(response){
        $scope.products = response.data;
    };
    ajaxUtil.get('/api/cart',$scope, "onGetProducts");
}]);