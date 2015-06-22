'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('MainApp'));
  var MainCtrl,$scope,$resource,_;

  // Initialize the controller and a mock scope
  beforeEach(function() {
    angular.mock.inject(function ($injector) {
      _ = $injector.get('lodash');
      $scope = $injector.get('$rootScope').$new();
      $resource = function() {};//$injector.get('$resource');
      MainCtrl = $injector.get('MainCtrl', {
        $scope: $scope,
        $resource: $resource,
        conf: {}
      });
    })
  });

  it('should attach function getNurseries to scope', function() {
    expect(_.isFunction($scope.getNurseries)).toBe(true);
  });

});
