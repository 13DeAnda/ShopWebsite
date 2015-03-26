angular.module('necs.CartModule.controller', ['AjaxModule'])
.controller('CartController', ['$scope','ajaxUtil',
function($scope, ajaxUtil){

    $scope.onGetProducts = function(response){
        $scope.products = response.data;
    };
    ajaxUtil.get('/api/cart',$scope, "onGetProducts");
}]);