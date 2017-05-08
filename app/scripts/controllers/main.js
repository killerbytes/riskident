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
    $scope.form = {};
    $scope.model = {
      type: 'info'
    }

    $scope.submit = function(){
      notifier.add($scope.model);
      $scope.model.title = '';
      $scope.model.content = '';
      $scope.form.notifierForm.$setPristine();
    }

  });
