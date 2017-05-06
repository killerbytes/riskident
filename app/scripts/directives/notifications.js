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
          // console.log(scope.notifications, notifier.get())
          return notifier.get()
          // console.log(notifier.get)
        })
      }
    };
  });
