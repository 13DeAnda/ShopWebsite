angular.module('vc', ['ngRoute',
                        'vc.LandingModule.controller',
                        'vc.HeaderModule.directives',
                        'vc.FooterModule.directives',
                        ])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'html/landing.html',
      controller: 'LandingController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);