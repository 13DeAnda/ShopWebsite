angular.module('vc', ['ngRoute',
                        'vc.LandingModule.controller',
                        'vc.HeaderModule.directives',
                        'vc.FooterModule.directives',
                        'vc.ProductsModule.controller',
                        'vc.ProductModule.controller',
                        'vc.CartModule.controller',
                        'vc.LoginModule.controller',
                        'vc.AccountModule.controller',
                        ])
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
    .when('/cart', {
      templateUrl: 'html/cart.html',
      controller: 'CartController'
    })
    .when('/login', {
      templateUrl: 'html/login.html',
      controller: 'LoginController'
    })
        .when('/account', {
      templateUrl: 'html/account.html',
      controller: 'AccountController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);