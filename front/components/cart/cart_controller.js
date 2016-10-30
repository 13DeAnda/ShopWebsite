angular.module('black.CartModule.controller', ['ngCookies', 
                                               'black.HelperUtilModule.services',
                                               'black.CartModule.services',
                                               'black.ProductModule.services'])
.controller('CartController', ['$scope', '$cookies', 'helperUtility', 'cartUtility',
function($scope, $cookies, helperUtility, cartUtility){

  $scope.isMobile = helperUtility.isMobile();
  $scope.titleValue = $scope.isMobile? 'titleMobile' : 'title';
  $scope.cartValue = $scope.isMobile? 'cart text-center' : 'cart container';
  $scope.productValue = $scope.isMobile? 'productMobile' : 'col-lg-6 desc product';
  $scope.dataValue = $scope.isMobile? 'dataMobileText' : 'col-sm-2 desc dataText';
  $scope.buttonsValue = $scope.isMobile? 'buttonsMobile' : 'row buttons';
  
  $scope.total = 0;
  //add in the database these products
  //make service to retrive.
  //make sure user is logged in
  // bind quantity change,
  // make total
  //service to go to product when image or title clicked
  // make a responsive design for when it's web and small
  
  $scope.getCart = function(){
    var uuid = $cookies.get('blackUuid');
    if(uuid){
      cartUtility.getUserCart(uuid, $scope, 'onGetCart');
    }
    
  };

  $scope.onGetCart = function(response, error){
    if(response.status !== 200){
      console.log("an error occured should be handled", response.data);
    }
    else{
     $scope.products = response.data; 
    }

  };

  $scope.goToProduct = function(id){
    productUtility.navigateToProductDetail(id);
  };

  $scope.getCart();
}]);
