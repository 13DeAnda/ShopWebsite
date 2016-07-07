angular.module('black.HeaderTopLinksModule.directives', []).
directive("headerTopLinksDirective",
[
function(){
  'use strict';
  
  function linkingFunction(scope, element, attrs){
    scope.element = element;
  }

  function controller($scope){

    $scope.topLinks = [
        {
          title: "user",
          image: "/assets/images/icons/userIcon.png",
          link: "/account",
          auth: "false"
        },
        {
          title: "wishlist",
          image: "/assets/images/icons/wishListIcon.png",
          link: "/wishlist",
          auth: "true"
        },
        {
          title: "shop",
          image: "/assets/images/icons/shopIcon.png",
          link: "/shop",
          auth: "false"
        },
        {
          title: "explore",
          image: "/assets/images/icons/exploreIcon.png",
          link: "/explore",
          auth: "false"
        },
    ];




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
    templateUrl: "html/headerTopLinks.html",
    link: linkingFunction
  };
}]);