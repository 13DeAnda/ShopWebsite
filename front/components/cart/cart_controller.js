angular.module('black.CartModule.controller', ['ngCookies', 'black.HelperUtilModule.services'])
.controller('CartController', ['$scope', '$cookies', 'helperUtility',
function($scope, $cookies, helperUtility){

  $scope.isMobile = helperUtility.isMobile();
  console.log("is mobile?", $scope.isMobile);

  $scope.titleValue = $scope.isMobile? 'titleMobile' : 'title';
  $scope.cartValue = $scope.isMobile? 'cart text-center' : 'cart container';
  $scope.productValue = $scope.isMobile? 'productMobile' : 'col-lg-6 desc product';
  $scope.dataValue = $scope.isMobile? 'dataMobileText' : 'col-sm-2 desc dataText';
  $scope.buttonsValue = $scope.isMobile? 'buttonsMobile' : 'row buttons';
  
  $scope.total = 324;
  //add in the database these products
  //make service to retrive.
  //make sure user is logged in
  // bind quantity change,
  // make total
  //service to go to product when image or title clicked
  // make a responsive design for when it's web and small
  $scope.products = [
    {
      did: 3,
      price: 232,
      imageSrc: "http://img16.shop-pro.jp/PA01096/409/product/83748679_o1.jpg",
      title: "sacred crosss dress",
      quantity: 1,
    }
  ];

  $scope.goTo = function(id){
    console.log("goes to function");
  };

}]);
