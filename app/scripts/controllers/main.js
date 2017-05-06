'use strict';

/**
 * @ngdoc function
 * @name riskidentApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the riskidentApp
 */
angular.module('riskidentApp')
  .controller('MainCtrl', function ($scope, notifier) {
    $scope.add = function(){
      notifier.add('testing')
    }

  });
