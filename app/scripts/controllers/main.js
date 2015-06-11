'use strict';

var app = angular.module('MainApp');

app.controller('MainCtrl', function($scope, $resource, conf) {

  console.log(conf);
  var Nursery = $resource(conf.backend + '/db/nurseries/:id', {}, {
    'all': {
      method: 'GET',
      isArray: false
    }
  });

  $scope.getNurseries = function() {
    $scope.isLoading = true;
    var response = Nursery.all(function() {
      console.log(response.record);
      $scope.nurseries = response.record;
      $scope.isLoading = false;
    });
  };

  $scope.isLoading = false;

});
