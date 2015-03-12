angular.module('necs', ['ngRoute',
                        'necs.LandingModule.controller',
                        'necs.HeaderModule.directives',
                        'necs.FooterModule.directives'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'html/landing.html',
      controller: 'LandingController'
    })
    .when('/catalog', {
      templateUrl: 'html/catalog.html',
      controller: 'CatalogController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);