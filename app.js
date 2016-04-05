'use strict';
// declaration d'un module intitulé "amen"
var app = angular.module('amen',['ng-route']);
app.config(function($routeProvider)
{
  $routeProvider

   .when('/',{
  templateUrl:'pages/login.html'
})
   .when('/index',{
  templateUrl:'index.html'
})
   .otherwise({
redirectTo:'/'  });
});

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
