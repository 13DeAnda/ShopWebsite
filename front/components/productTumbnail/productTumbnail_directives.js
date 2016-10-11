angular.module('black.ProductTumbnailModule.directives', ['black.ProductModule.services']).
directive("productTumbnailDirective", 
['productUtility',
function(productUtility){
  'use strict';
  function linkingFunction(scope){
  }

  function controller($scope){
    $scope.isSelected = false;

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
      productUtility.navigateToProductDetail($scope.product.did);
    };
  }
  controller.$inject = ['$scope'];
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    controller: controller,
    scope: {
        product: '='
    },
    templateUrl: "html/productTumbnail.html",
    link: linkingFunction
  };
}]);