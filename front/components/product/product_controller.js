angular.module('black.ProductModule.controller', ['AjaxModule'])
.controller('ProductController', ['$scope', 'ajaxUtil', '$routeParams',
function($scope, ajaxUtil, $routeParams){
	//By standar a product must have at least one.

	$scope.imageChange = function(url){
		$scope.currentImage = url;
	};

	$scope.getProduct = function(){
		ajaxUtil.get('/api/product/'+$routeParams.id, $scope, "onGetProduct");
	};

	$scope.onGetProduct = function(response){
		$scope.product = response.data[0];
		$scope.currentImage = $scope.product.images[0]; 
	};

	$scope.getProduct();
}]);