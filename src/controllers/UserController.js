'use strict';
// declaration d'un controlleur "userLogin" et ajout dd'une fonction de verificarion des informations pour l'authentification

app.controller('userLogin',function($scope,$location){
  $scope.login;
  $scope.password;
  $scope.sub=function(){


if($scope.login=='amen'&& $scope.password=='admin'){
    $location.path('/cv');
  }else {
    alert('login incorrect');
  }
};

});
