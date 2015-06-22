'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('MainApp'));
  var MainCtrl, Nursery, $scope, _;

  // Initialize the controller and a mock scope
  beforeEach(function() {
    angular.mock.inject(function ($injector, $controller) {
      // dependencies
      Nursery = $injector.get('Nursery');
      $scope = {};
      // controller setup
      MainCtrl = $controller('MainCtrl', {
        $scope: $scope,
        Nursery: Nursery
      });
      // tools
      _ = $injector.get('lodash');
    })
  });

  describe('getNurseries', function() {
    it('should be attached to scope', function() {
      expect(_.isFunction($scope.getNurseries)).toBe(true);
    });
  });

});
