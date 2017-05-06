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
    this.testing = true;
    var notifications = [];
    var counter = 0;
    // Public API here
    return {
      add: function(message){
        counter++
        notifications.push({
          id: counter,
          title: 'notification',
          content: message + counter
        })
      },
      remove: function(item, cb){
        notifications = notifications.filter(i=>{
          return item.id != i.id;
        })
        console.log(notifications)
        cb.apply();
      },
      get: function(){
        return notifications;
      }
    };
  });
