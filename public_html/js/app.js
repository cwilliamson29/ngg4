'use strict';



var NGG3 = angular.module('NGG3', [
    'ngRoute'
]);

NGG3.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/welcome.html', controller: 'PlayerController'});
  $routeProvider.when('/start', {templateUrl: 'partials/players.html', controller: 'PlayerController'});
  $routeProvider.when('/play', {templateUrl: 'partials/main.html', controller: 'PlayerController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);