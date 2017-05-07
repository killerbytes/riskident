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
    $scope.model = {
      type: 'info',
      title: 'title',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit'
    }

    $scope.submit = function(){
      notifier.add($scope.model);
    }

  });
