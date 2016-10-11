angular.module('black.FooterModule.directives', ['black.HelperUtilModule.services'])
.directive("footerDirective", ['helperUtility',
function(helperUtility){
  'use strict';

  function linkingFunction(scope, element, attrs){
    scope.element = element;
  }
  function controller($scope, helperUtil){

    $scope.isMobile = helperUtility.isMobile()? 'mobile' : 'col-md-4';

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
