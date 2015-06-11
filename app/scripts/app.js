'use strict';

var app = angular
  .module('MainApp', [
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngLodash'
  ]);

// App Config
app.constant('conf', {
  backend: 'http://naterator-dreamfactory.herokuapp.com:80/rest'
});

app.config(function($routeProvider, $httpProvider) {

  // Routing
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl'
    })
    .when('/nursery/:id', {
      templateUrl: 'views/nursery.html',
      controller: 'NurseryCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });

  // Default headers
  $httpProvider.defaults.headers.common['X-DreamFactory-Application-Name'] = 'testapp';

});
