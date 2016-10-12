angular.module('black.HeaderTopLinksModule.directives', ['ngTouch']).
directive("headerTopLinksDirective",
[
function(){
  'use strict';
  
  function linkingFunction(scope, element, attrs){
    scope.element = element;
  }

  function controller($scope){
    $scope.mobileMenu = false;
    
    $scope.topLinks = [
      {
        title: "user",
        image: "/assets/images/icons/userIcon.png",
        link: "/account",
        auth: "false",
        focus: "off"
      },
      {
        title: "wishlist",
        image: "/assets/images/icons/wishListIcon.png",
        link: "/wishlist",
        auth: "true",
        focus: "off"
      },
      {
        title: "shop",
        image: "/assets/images/icons/shopIcon.png",
        link: "/shop",
        auth: "false",
        focus: "off"
      },
      {
        title: "explore",
        image: "/assets/images/icons/exploreIcon.png",
        link: "/explore",
        auth: "false",
        focus: "off"
      },
    ];

    //make these a toggle
    $scope.offObject = function(item){
      item.focus = "off";
    };

    $scope.onObject = function(item){
      item.focus = "on";
    };

    //make a toggle?
    $scope.openMobileMenu = function(){
      $scope.mobileMenu = true;
    };

    $scope.closeMobileMenu = function(){
      $scope.mobileMenu= false;
    };

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
      isMobile: '='
    },
    templateUrl: "html/headerTopLinks.html",
    link: linkingFunction
  };
}]);