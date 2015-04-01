angular.module('vc.FooterModule.directives', [])
.directive("footerDirective",
[
function(){
  'use strict';

  function linkingFunction(scope, element, attrs){
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

    $scope.shippingLinks=[
      {
        title:"shipping in USA",
        link:"/"
      },
      {
        title:"Shipping outside USA",
        link:"/"
      },
      {
        title:"returns",
        link:"/"
      }
    ];
    $scope.aboutLinks=[
      {
        title:"company",
        link:"/aboutUs"
      },
      {
        title:"Contact",
        link:"/contact"
      },
      {
        title:"Jobs",
        link:"/jobs"
      },
      {
        title:"FAQ",
        link:"/faq"
      }
    ];

    $scope.socialLinks=[
      {
        title:"facebook",
        link:"/"
      },
      {
        title:"Twitter",
        link:"/"
      },
      {
        title:"Youtube",
        link:"/"
      }
    ];

    $scope.websiteLinks=[
      {
        title:"Site map",
        link:"/sitemap"
      },
      {
        title:"Accesability",
        link:"/Accesability"
      },
      {
        title:"NECS tour",
        link:"/tour"
      },
      {
        title:"Sign Up",
        link:"/enroll"
      }
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
    templateUrl: "html/footer.html",
    link: linkingFunction
  };
}]);
