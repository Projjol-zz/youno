'use strict';

/**
 * @ngdoc function
 * @name younoApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the younoApp
 */
angular.module('younoApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
