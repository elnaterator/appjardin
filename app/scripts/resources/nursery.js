'use strict';

var app = angular.module('MainApp');

app.factory('Nursery', function($resource, conf) {
  var Nursery = $resource(conf.backend + '/nurseries/:id', {}, {
    'all': {
      method: 'GET',
      isArray: true
    },
    'add': {
      method: 'POST',
      isArray: false,
    }
  });
  return Nursery;
});
