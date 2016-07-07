angular.module('black.LandingModule.controller', [])
.controller('LandingController', ['$scope',
function($scope){

	//TODO: would have to be retrived on api's as either recomendations or most popular.
	$scope.featuredProducts = [
		{
			title: "moon bag",
			src: "http://thumbs2.ebaystatic.com/d/l225/m/mNz3cTZ1l98NbpQpuwwfn-Q.jpg"
		},
		{
			title: "moon bag 3",
			src: "http://www.the-gothic-shop.co.uk/thumbs/180x270/images/user/58-050815125722.jpg"
		},
		{
			title: "moon bag 4",
			src: "http://thumbs2.ebaystatic.com/d/l225/m/mNz3cTZ1l98NbpQpuwwfn-Q.jpg"
		},
		{
			title: "moon bag 5",
			src: "http://www.the-gothic-shop.co.uk/thumbs/180x270/images/user/58-050815125722.jpg"
		},
		{
			title: "moon bag 6",
			src: "http://thumbs2.ebaystatic.com/d/l225/m/mNz3cTZ1l98NbpQpuwwfn-Q.jpg"
		},
		{
			title: "moon bag 7",
			src: "http://www.the-gothic-shop.co.uk/thumbs/180x270/images/user/58-050815125722.jpg"
		},
	];

}]);