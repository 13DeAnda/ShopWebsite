angular.module('black.FooterModule.directives', [])
.directive("footerDirective",
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
    templateUrl: "html/footer.html",
    link: linkingFunction
  };
}]);
