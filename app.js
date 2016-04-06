'use strict';
// declaration d'un module intitulé "amen"
var app = angular.module('amen',['ngRoute']);
app.config(function($routeProvider)
{
  $routeProvider

   .when('/',{
  templateUrl:'pages/login.html',
  controller:'userLogin'
})
.when('/cv',{
templateUrl:'pages/cv.html',
 controller:'titreCreate'
})
   .when('/index',{
  templateUrl:'index.html'
})
   .otherwise({
redirectTo:'/'  });

});
