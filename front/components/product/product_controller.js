angular.module('black.ProductModule.controller', [])
.controller('ProductController', ['$scope',
function($scope){

	$scope.product = {
		id: 1,
		title: "some title",
		price: 56,
		location: "some location",
		images: [
			"https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQcsvljNlUYAOnUWtAYlVaEyeI97Sp8NzhCVMfmbLhLrlYFzF-Z",
			"http://i619.photobucket.com/albums/tt278/_cyanidedoll_/On%20sale/MmMRC1.jpg",
			"http://i1140.photobucket.com/albums/n562/DarkRomantica/P1060072.jpg"
		];
	};

}]);