angular.module('vc.MenuModule.directives', ['ui.bootstrap'])
.directive('menuDirective',
[
function(cakeBaseUrl){
 'use strict';

 function linkingFunction(scope, element){
   scope.element = element;
 }
 function controller($scope){

  // constants //////////////////////////////

    // scope properties ///////////////////////
  $scope.categories = [
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

  // ajax ///////////////////////////////////

  // handle broadcast messages //////////////

  // watch //////////////////////////////////

  // event handlers /////////////////////////

  // broadcast/emit /////////////////////////

  // double bound ///////////////////////////

  // scope/helper ///////////////////////////

  // destroy ////////////////////////////////

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
