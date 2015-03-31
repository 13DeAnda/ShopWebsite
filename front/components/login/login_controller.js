angular.module('necs.LoginModule.controller', ['AjaxModule'])
.controller('LoginController', ['$scope','ajaxUtil',
function($scope, ajaxUtil){
  $scope.loginData = {
    username: "",
    password: ""
  };

  $scope.login = function() {
    //new user
    if($scope.newUser.checked){
      ajaxUtil.post("/signup", $scope.loginData, $scope, "onPostLogin");

    }
    //logs in
    else if ($scope.loginData.username && $scope.loginData.password) {
      ajaxUtil.post("/login", $scope.loginData, $scope, "onPostLogin");
    }
  };

  $scope.onPostLogin = function(response) {
    console.log(response);
  };
}]);