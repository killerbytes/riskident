'use strict';

/**
 * @ngdoc directive
 * @name riskidentApp.directive:notification
 * @description
 * # notification
 */
angular.module('riskidentApp')
  .directive('notification', function (notifier, $timeout) {
    return {
      templateUrl: 'views/directives/notification.html',
      restrict: 'E',
      scope: {
        item: '='
      },
      link: function postLink(scope, element, attrs) {
        $timeout(function(){
          notifier.remove(scope.item, function(){
          //   scope.$apply();
          });
        },1000)
      }
    };
  });
