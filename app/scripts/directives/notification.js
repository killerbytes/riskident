'use strict';

/**
 * @ngdoc directive
 * @name riskidentApp.directive:notification
 * @description
 * # notification
 */
angular.module('riskidentApp')
  .directive('notification', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the notification directive');
      }
    };
  });
