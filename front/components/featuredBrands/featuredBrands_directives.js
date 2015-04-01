angular.module('vc.FeaturedBrandsModule.directives', ['ui.bootstrap.tpls'])
.directive('featuredBrandsDirective',
[
function(){
 'use strict';

 function linkingFunction(scope, element){
   scope.element = element;
 }
 function controller($scope){

   // constants //////////////////////////////

   // scope properties ///////////////////////
    $scope.slides=[
    {
      image:"assets/images/home/rail/1.jpg",
      url:"/"
    },
    {
      image:"assets/images/home/rail/2.jpg",
      url:"/"
    },
    {
      image:"assets/images/home/rail/3.jpg",
      url:"/"
    }
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
   templateUrl: 'html/featuredBrands.html',
   link: linkingFunction
 };
}]);
