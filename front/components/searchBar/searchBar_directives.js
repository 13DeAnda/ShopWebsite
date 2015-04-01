angular.module('vc.SearchBarModule.directives', [])
.directive('searchBarDirective',
[
function(cakeBaseUrl){
 'use strict';

 function linkingFunction(scope, element){
   scope.element = element;
 }
 function controller($scope){

   // constants //////////////////////////////

   // scope properties ///////////////////////

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
   templateUrl: 'html/searchBar.html',
   link: linkingFunction
 };
}]);
