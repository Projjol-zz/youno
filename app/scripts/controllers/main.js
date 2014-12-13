'use strict';

/**
 * @ngdoc function
 * @name younoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the younoApp
 */
angular.module('younoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
