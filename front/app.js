angular.module('black', ['ngRoute',
                        'black.LandingModule.controller',
                        'black.HeaderModule.directives',
                        'black.FooterModule.directives',
                        'black.ProductModule.controller',
                        'black.ProductTumbnailModule.directives'
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
    .otherwise({
      redirectTo: '/'
    });
}]);