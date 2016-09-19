angular.module('black.HeaderMenuModule.directives', []).
directive("headerMenuDirective",
[
function(){
  'use strict';

  function linkingFunction(scope, element, attrs){
    scope.element = element;
  }

  function controller($scope){
    $scope.menuItems = [
      {
        title: "SHOP",
        items: [
            {
              title: "Clothing",
              url: "shop/clothing"
            },
            {
              title: "Accessories",
              url: "shop/Accessories"
            },
            {
              title: "Home",
              url: "shop/home"
            }
        ],
        focus: "off",
      },
      {
        title: "EXPLORE",
        items: [
          {
            title: "Fashion",
            url:"explore/fashion"
          },
          {
            title: "Home Decor",
            url:"explore/home"
          },
          {
            title: "Places",
            url:"explore/places"
          },
          {
            title: "Artwork",
            url:"explore/artwork"
          },
          {
            title: "Enthertaiment",
            url:"explore/enthertaiment"
          },
        ],
        focus: "off"
      }
    ];

    $scope.offMenu = function(item){
      item.focus = "off";
    };

    $scope.onMenu = function(item){
      item.focus = "on";
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
    },
    templateUrl: "html/headerMenu.html",
    link: linkingFunction
  };
}]);