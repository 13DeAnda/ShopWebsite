angular.module('necs', ['ngRoute',
                        'necs.LandingModule.controller',
                        'necs.HeaderModule.directives',
                        'necs.FooterModule.directives',
                        'necs.ProductsModule.controller',
                        'necs.ProductModule.controller'])
.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'html/landing.html',
      controller: 'LandingController'
    })
    .when('/products', {
      templateUrl: 'html/products.html',
      controller: 'ProductsController'
    })
    .when('/products/:id', {
      templateUrl: 'html/product.html',
      controller: 'ProductController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);