angular.module('black.LoginModule.controller', ['AjaxModule', 'ngCookies'])
.controller('LoginController', ['$scope', 'ajaxUtil', '$cookies',
function($scope, ajaxUtil,$cookies){
	$scope.loginData = {
	    username : null,
	    password : null,
  	};
  	$scope.registerDisplay = false;
  	$scope.title = "Login";

	
	$scope.showRegister = function(){
		$scope.registerDisplay = true;
		$scope.title = "Register";
	};
	
	$scope.showLogin = function(){
		$scope.registerDisplay = false;
		$scope.title = "Login";
	};	

	$scope.login = function (){
		console.log("on login function");
		if($scope.loginData.username && $scope.loginData.password){
			ajaxUtil.get("/api/user/login?username="+$scope.loginData.username+"&password="+$scope.loginData.password, $scope, "onLogin");
		}
		else if(!$scope.loginData.password && !$scope.loginData.username){
			$scope.errorMessage = "Please make type your password and username";
		}
		else if(!$scope.loginData.username){
			$scope.errorMessage = "Please make type your username";
		}
		else if(!$scope.loginData.password){
			$scope.errorMessage = "Please make type your password";
		}
	};

	$scope.onLogin = function(response, error){
		if(error){
			console.log("error login in", error);
		}
		else{
			$cookies.blackUuuid = response.data.data.uuid;
			console.log("the user's log in", response.data.data);
		}
	};

	$scope.register = function(){
		if($scope.loginData.password === $scope.passwordMatch){

			if($scope.loginData.username && $scope.loginData.password){
				ajaxUtil.post("/api/user/register", $scope.loginData, $scope, "onRegister");
			}

			//TODO:// should to authentifications on some other function probably
			else if(!$scope.loginData.password && !$scope.loginData.username){
				$scope.errorMessage = "Please make type your password and username";
			}
			else if(!$scope.loginData.username){
				$scope.errorMessage = "Please make type your username";
			}
			else if(!$scope.loginData.password){
				$scope.errorMessage = "Please make type your password";
			}
		}
		else{
			$scope.matchErrorMessage = "Please make sure the passwords match";
		}
	};

	$scope.onRegister = function(response, error){
		if(error){
			console.log("error register in", error);
		}
		else{
			$cookies.blackUuuid = response.data.uuid;
			console.log("the user's register in", response.data);
		}
	};

}]);
