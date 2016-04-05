'use strict';
// declaration d'un controlleur "userLogin" et ajout dd'une fonction de verificarion des informations pour l'authentification
app.controller('userLogin',function($scope,$location){
  $scope.submit=function(){
var login=$scope.login;
var password=$scope.password;
if(login=='amen'&&password=='admin'){
    $location.path('../index.html');
  }else {
    alert('login incorrect');
  }
};

});
