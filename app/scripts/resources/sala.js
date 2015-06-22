'use strict';

var app = angular.module('MainApp');

app.factory('Sala', function($resource, conf) {
  var Sala = $resource(conf.backend + '/salas/:id', {}, {
    'all': {
      method: 'GET',
      isArray: true
    },
    'add': {
      method: 'POST',
      isArray: false,
    }
  });
  return Sala;
});
