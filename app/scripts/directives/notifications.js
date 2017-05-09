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
      templateUrl: 'views/directives/notifications.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.notifications = []
        scope.$watch(function(){
          scope.notifications = notifier.get();
          scope.limit = scope.notifications.length > notifier.limit ? true : false;
          return notifier.get()
        })
      }
    };
  });
