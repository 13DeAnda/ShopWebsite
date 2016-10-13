angular.module('black.PathModule.services', [])
.constant('navigationUrl', {
  product: function(id) {
    return '/product/' + id;
  },
  login: function() {
    return '/login/';
  },
  cart: function() {
    return '/cart/';
  }
})
.constant('apiUrl', {
	products: function(){
    return 'api/products' ;
  },
  product: function(id){
    return 'api/product/'+id;
  },
  login: function(username, password){
    return "/api/user/login?username=" + username + "&password=" + password;
  },
  register: function(){
    return "/api/user/register";
  }
});
