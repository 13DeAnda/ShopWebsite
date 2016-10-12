angular.module('black.LandingModule.controller', ['AjaxModule', 
												  'black.ProductTumbnailModule.directives', 
												  'black.ProductModule.services',
												  'black.HelperUtilModule.services'])
.controller('LandingController', ['$scope', 'ajaxUtil', 'productUtility', 'helperUtility',
function($scope, ajaxUtil, productUtility, helperUtil){
	
	//TODO: would have to be retrived on api's as either recomendations or most popular.
	$scope.isMobile = helperUtil.isMobile();
	$scope.productValue = $scope.isMobile? 'productMobile' : 'product';
	$scope.landingValue = $scope.isMobile? 'landing' : 'landing container';
	$scope.getFeaturedProducts = function(){
		productUtility.getProducts($scope, 'onGetFeaturedProducts');
	};

	$scope.onGetFeaturedProducts = function(response){
		$scope.featuredProducts = response.data.data;
	};

	$scope.getFeaturedProducts();
}]);