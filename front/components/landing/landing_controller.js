angular.module('black.LandingModule.controller', ['AjaxModule', 'black.ProductTumbnailModule.directives'])
.controller('LandingController', ['$scope', 'ajaxUtil',
function($scope, ajaxUtil){
	//TODO: would have to be retrived on api's as either recomendations or most popular.


	$scope.getFeaturedProducts = function(){
		ajaxUtil.get('/api/products', $scope, "onGetFeaturedProducts");
	};

	$scope.onGetFeaturedProducts = function(response){
		$scope.featuredProducts = response.data;
	};

	$scope.getFeaturedProducts();
}]);