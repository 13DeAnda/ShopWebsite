angular.module('black', ['ngRoute',
                        'black.LandingModule.controller',
                        'black.HeaderModule.directives',
                        'black.FooterModule.directives'
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