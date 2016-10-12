angular.module('black.ProductModule.controller', ['black.ProductModule.services',
												  'black.HelperUtilModule.services'])
.controller('ProductController', ['$scope', 'productUtility', '$routeParams', 'helperUtility',
function($scope, productUtility, $routeParams, helperUtil){
	
	$scope.isMobile = helperUtil.isMobile();
	$scope.productValue = $scope.isMobile? 'product':'product container';
	$scope.mainImageValue = $scope.isMobile? 'mainImageMobile' : 'mainImage';
	$scope.cartButtonValue = $scope.isMobile? 'cartButtonMobile' : 'cartButton';
	$scope.priceValue = $scope.isMobile? 'price mobileText' : 'price';
	$scope.titleValue = $scope.isMobile? 'title mobileText' : 'title';
	$scope.descriptionValue = $scope.isMobile? 'description mobileText' : 'description';

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