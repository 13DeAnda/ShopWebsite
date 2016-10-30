angular.module('black.ProductTumbnailModule.directives', ['black.ProductModule.services']).
directive("productTumbnailDirective", 
['productUtility',
function(productUtility){
  'use strict';
  function linkingFunction(scope){
  }

  function controller($scope){

    $scope.isSelected = false;
    $scope.productImageValue = $scope.isMobile? 'productImageMobile' : 'productImage';
    $scope.titleValue = $scope.isMobile? 'mobileText' : 'title';
    
    //toggle could be used
    $scope.onProduct= function(){
      if($scope.isSelected === false){
         $scope.isSelected = true; 
      }
      
    };
    //TODO!!! use a toggle
    $scope.offProduct = function(){
      if($scope.isSelected === true){
        $scope.isSelected = false;
      }
    };

    $scope.productClick = function(){
      productUtility.navigateToProductDetail($scope.product.id);
    };
    $scope.mainImage = $scope.product.images[0] ? $scope.product.images[0] : "/assets/images/placeholder.jpg";
  }
  controller.$inject = ['$scope'];
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    controller: controller,
    scope: {
        product: '=',
        isMobile: '='
    },
    templateUrl: "html/productTumbnail.html",
    link: linkingFunction
  };
}]);