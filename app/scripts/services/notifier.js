'use strict';

/**
 * @ngdoc service
 * @name riskidentApp.notifier
 * @description
 * # notifier
 * Factory in the riskidentApp.
 */
angular.module('riskidentApp')
  .factory('notifier', function () {
    var notifications = [];

    // Public API here
    return {
      add: function(message){
        notifications.push(message)
      },
      get: function(){
        return notifications;
      }
    };
  });
