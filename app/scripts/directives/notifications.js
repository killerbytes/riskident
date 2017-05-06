'use strict';

/**
 * @ngdoc directive
 * @name riskidentApp.directive:notifications
 * @description
 * # notifications
 */
angular.module('riskidentApp')
  .directive('notifications', function (notifier) {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.$watch(function(){
          scope.notifications = notifier.get();
        })
      }
    };
  });
