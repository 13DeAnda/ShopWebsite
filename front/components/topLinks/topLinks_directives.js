angular.module('vc.TopLinksModule.directives', [])
.directive('topLinksDirective',
[
function(cakeBaseUrl){
 'use strict';

 function linkingFunction(scope, element){
   scope.element = element;
 }
 function controller($scope){

    $scope.topLinks=[
    {
      title:"home",
      url:"/home"
    },
    {
      title:"Log in",
      url:"/login"
    },
    {
      title:"Account",
      url:"/account"
    }
    ];

    $scope.socialLinks=[
    {
      url:"/",
      image:"assets/images/facebook.jpg"
    },
    {
      url:"/",
      image:"assets/images/twitter.png"
    }
    ];

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
   templateUrl: 'html/topLinks.html',
   link: linkingFunction
 };
}]);
