angular.module('necs.MenuModule.directives', ['ui.bootstrap'])
.directive('menuDirective',
[
function(cakeBaseUrl){
 'use strict';

 function linkingFunction(scope, element){
   scope.element = element;
 }
 function controller($scope){
  $scope.categories=[
    {
      title:"Dresses",
      url:"/products",
    },
    {
      title:"Skirts",
      url:"/products",
    },
    {
      title:"accesories",
      url:"/products",
    },
  ];

  $scope.status= {
    isopen: false
  };

  $scope.toggled = function(open) {
    $log.log('Dropdown is now: ', open);
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

   $scope.$on('$destroy', function(){
     $scope.element = null;
   });
 }
 controller.$inject = ['$scope'];
 return {
   restrict: 'E',
   replace: true,
   transclude: false,
   controller: controller,
   scope: {
   },
   templateUrl: 'html/menu.html',
   link: linkingFunction
 };
}]);
