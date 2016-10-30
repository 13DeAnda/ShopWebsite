angular.module('black.ProductModule.controller', ['black.ProductModule.services',
                                                  'black.HelperUtilModule.services',
                                                  'black.CartModule.services',
                                                  'ngCookies'])
.controller('ProductController', ['$scope', 'productUtility', '$routeParams', 'helperUtility', 'cartUtility', '$cookies',
function($scope, productUtility, $routeParams, helperUtil, cartUtility, $cookies){
    
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
      $scope.product.quantity = 1;
      $scope.currentImage = $scope.product.images[0]; 
    };

    $scope.addToCart = function(){
      var uuid = $cookies.get('blackUuid');
    
      var cartItem = {
          title: $scope.product.title,
          itemId: $scope.product.id,
          price: $scope.product.price,
          quantity: $scope.product.quantity,
          src: $scope.product.images[0] || "/assets/images/placeholder.jpg"
      };
      cartUtility.addToCart(uuid, cartItem, $scope, 'onAddToCart');
    };

    $scope.onAddToCart = function(response){
      $cookies.put('blackUuid', response.data);
    };

    $scope.currentImage = "/assets/images/placeholder.jpg";
    $scope.getProduct();
}]);