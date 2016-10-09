angular.module('black.LoginModule.controller', ['AjaxModule', 'ngCookies'])
.controller('LoginController', ['$scope', 'ajaxUtil', '$cookies',
function($scope, ajaxUtil,$cookies){
	$scope.loginData = {
	    username : null,
	    password : null,
  	};
  	$scope.registerDisplay = false;
  	$scope.title = "Login";
  	$scope.errors = {};

	
	$scope.showRegister = function(){
		$scope.registerDisplay = true;
		$scope.title = "Register";
	};
	
	$scope.showLogin = function(){
		$scope.registerDisplay = false;
		$scope.title = "Login";
	};	

	$scope.login = function (){
		if($scope.loginData.username && $scope.loginData.password){
			ajaxUtil.get("/api/user/login?username="+$scope.loginData.username+"&password="+$scope.loginData.password, $scope, "onLogin");
		}
		else if(!$scope.loginData.password && !$scope.loginData.username){
			$scope.errors.noData = "you must type an username and password to login";
		}
		else if(!$scope.loginData.username){
			$scope.errors.noData = "you must type an username  to login";
		}
		else if(!$scope.loginData.password){
			$scope.errors.noData = "you must type a password to register";
		}
	};

	$scope.onLogin = function(response, error){
		if(error){
			console.log("error login in", error);
		}
		else{
			$cookies.blackUuuid = response.data.data.uuid;
			console.log("the user's log in", response);
		}
	};

	$scope.register = function(){
		if($scope.validateRegisterData($scope.loginData.username, $scope.loginData.password, $scope.passwordMatch)){
			ajaxUtil.post("/api/user/register", $scope.loginData, $scope, "onRegister");
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

	//TODO!! all of these shall be appearings at the same time the person types and leaves the textbox
	$scope.validateRegisterData = function(username, password, matchPassword){
		var regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}/;
		$scope.errors = {};
		console.log("matches?", password.match(regex));
		if(!username && !password){
			$scope.errors.noData = "you must type an username and password to register";
		}
		else if(!username){
			$scope.errors.noUsername = "you must type an username to register";
		}
		else if(!password){
			$scope.errors.noPassword= "you must type a password to register";
		}
		else if(password !== matchPassword){
			$scope.errors.noPasswordMatch = "passwords must match";
		}	
		else if(username.length < 6 || username.length > 12){
			$scope.errors.noCorrectUsername= ("username should be between 6 and 12 characters");
		}
		else if(!password.match(regex)){
			$scope.errors.noCorrectPassword= "password should contain between 6 and 12 characters, an uppercase and a number";
		}
		if(Object.keys($scope.errors).length > 0){
			return false;
		}
		else{
			return true;
		}
	};

}]);
