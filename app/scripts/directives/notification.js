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
        if(scope.item.type == 'info'){
          $timeout(function(){
            notifier.remove(scope.item);
          },90000)
        }
        scope.close = function(){
          notifier.remove(scope.item);
        }
        scope.closeGroup = function(){
          notifier.removeGroup();
        }
      }
    };
  });
