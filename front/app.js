angular.module('black', ['ngRoute',
                        'black.LandingModule.controller',
                        'black.HeaderModule.directives',
                        'black.FooterModule.directives',
                        'black.ProductModule.controller',
                        'black.ProductTumbnailModule.directives',
                        'black.LoginModule.controller',
                        'black.PathModule.services'
                        ])
.config(['$routeProvider', 'navigationUrl', function($routeProvider, navigationUrl) {
  $routeProvider
    .when('/', {
      templateUrl: 'html/landing.html',
      controller: 'LandingController'
    })
    .when(navigationUrl.product(':id'), {
      templateUrl: 'html/product.html',
      controller: 'ProductController'
    })
    .when(navigationUrl.login(), {
      templateUrl: 'html/login.html',
      controller: 'LoginController'
    })
    .otherwise({
      redirectTo: '/'
    });
}]);