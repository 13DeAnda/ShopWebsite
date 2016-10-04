angular.module('black', ['ngRoute',
                        'black.LandingModule.controller',
                        'black.HeaderModule.directives',
                        'black.FooterModule.directives',
                        'black.ProductModule.controller',
                        'black.ProductTumbnailModule.directives',
                        'black.LoginModule.controller'
                        ])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'html/landing.html',
      controller: 'LandingController'
    })
    .when('/product/:id', {
      templateUrl: 'html/product.html',
      controller: 'ProductController'
    })
    .when('/login', {
      templateUrl: 'html/login.html',
      controller: 'LoginController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);