angular.module('black.ProductModule.controller', ['black.ProductModule.services'])
.controller('ProductController', ['$scope', 'productUtility', '$routeParams',
function($scope, productUtility, $routeParams){
	//By standar a product must have at least one.

	$scope.imageChange = function(url){
		$scope.currentImage = url;
	};

	$scope.getProduct = function(){
		productUtility.getProduct($routeParams.id, $scope, 'onGetProduct');
	};

	$scope.onGetProduct = function(response){
		$scope.product = response.data.data;
		$scope.currentImage = $scope.product.images[0]; 
	};

	$scope.getProduct();
}]);