angular.module('black.ProductModule.controller', [])
.controller('ProductController', ['$scope',
function($scope){
	//By standar a product must have at least one.
	$scope.product = {
		id: 1,
		title: "some title",
		price: 56,
		location: "some location",
		images: [
			"https://s-media-cache-ak0.pinimg.com/564x/8c/78/fd/8c78fd82d51f5522f8094c7fd3c8dd3f.jpg",
			"http://i619.photobucket.com/albums/tt278/_cyanidedoll_/On%20sale/MmMRC1.jpg",
			"http://i1140.photobucket.com/albums/n562/DarkRomantica/P1060072.jpg"
		],
		description: "this is an example of a description that can be as long as 200 character"
	};
	$scope.currentImage = $scope.product.images[0]; 

	$scope.imageChange = function(url){
		$scope.currentImage = url;
	};
}]);