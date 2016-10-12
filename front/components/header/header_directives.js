angular.module('black.HeaderModule.directives', ['black.HeaderTopLinksModule.directives', 
                                                  'black.HeaderMenuModule.directives', 
                                                  'black.HelperUtilModule.services']).
directive("headerDirective", ['helperUtility',
function(helperUtility){
  'use strict';

  function linkingFunction(scope, element, attrs){
  scope.element = element;
  }

  function controller($scope, helperUtil){

    $scope.isMobile = helperUtility.isMobile();
    
    $scope.$on("$destroy", function(){
      $scope.element = null;
    });
  }
  controller.$inject = ['$scope'];
  return {
    restrict: "E",
    replace: true,
    transclude: false,
    controller: controller,
    scope: {},
    templateUrl: "html/header.html",
    link: linkingFunction
  };
}]);