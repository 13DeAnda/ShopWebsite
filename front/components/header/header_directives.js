angular.module('vc.HeaderModule.directives', ['vc.TopLinksModule.directives', 'vc.MenuModule.directives', 'vc.SearchBarModule.directives']).
directive("headerDirective",
[
function(){
  'use strict';

  function linkingFunction(scope, element, attrs){
  scope.element = element;
  }

  function controller($scope){
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
    scope: {
    },
    templateUrl: "html/header.html",
    link: linkingFunction
  };
}]);