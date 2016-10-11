angular.module('black.LandingModule.controller', ['AjaxModule', 'black.ProductTumbnailModule.directives', 'black.ProductModule.services'])
.controller('LandingController', ['$scope', 'ajaxUtil', 'productUtility',
function($scope, ajaxUtil, productUtility){
	
	//TODO: would have to be retrived on api's as either recomendations or most popular.
	$scope.getFeaturedProducts = function(){
		productUtility.getProducts($scope, 'onGetFeaturedProducts');
	};

	$scope.onGetFeaturedProducts = function(response){
		$scope.featuredProducts = response.data.data;
	};

	$scope.getFeaturedProducts();
}]);