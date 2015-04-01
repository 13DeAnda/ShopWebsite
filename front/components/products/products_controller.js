

angular.module('vc.ProductsModule.controller', ['AjaxModule'])
.controller('ProductsController', ['$scope','ajaxUtil',
function($scope, ajaxUtil){

    $scope.onGetProducts = function(response){
        $scope.products = response.data;
    };

    ajaxUtil.get('/api/products',$scope, "onGetProducts");
}]);