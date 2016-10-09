angular.module('black.ProductTumbnailModule.directives', []).
directive("productTumbnailDirective",
['$location',
function($location){
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

    $scope.offProduct = function(){
      if($scope.isSelected === true){
        $scope.isSelected = false;
      }
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