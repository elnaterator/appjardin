'use strict';

var app = angular.module('MainApp');

app.controller('MainCtrl', function($scope, Nursery) {

  $scope.nurseries = [];

  var Nursery = {
    all: function() {

    },
    add: function() {
      var nm = $scope.newNursery;
      console.log(nm);
      var nursery = { name: nm };
      $scope.nurseries.push(nursery);
    },
    delete: function() {
      console.log("delete");
    },
  };


  function getNurseries() {
    $scope.isLoading = true;
    var response = Nursery.all(function() {
      console.log(response);
      $scope.nurseries = response;
      $scope.isLoading = false;
    });
  };

  function addNursery() {
    Nursery.add();
  }

  $scope.addNursery = addNursery;
  $scope.getNurseries = getNurseries;

  $scope.isLoading = false;

  getNurseries();


});
