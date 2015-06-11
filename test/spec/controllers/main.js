'use strict';

describe('Controller: MainCtrl', function() {

  // load the controller's module
  beforeEach(module('MainApp'));

  var MainCtrl,scope,resource,conf,_;

  // Initialize the controller and a mock scope
  beforeEach(inject(function($controller, $rootScope, lodash) {
    scope = $rootScope.$new();
    resource = function() {};
    conf = {};
    _ = lodash;
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      $resource: resource,
      conf: conf
    });
  }));

  it('should attach isLoading=false to scope', function() {
    expect(scope.isLoading).toBe(false);
  });

  it('should attach function getNurseries to scope', function() {
    expect(_.isFunction(scope.getNurseries)).toBe(true);
  });

});
