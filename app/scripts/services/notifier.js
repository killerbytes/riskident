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
    var limit = 5;
    // Public API here
    return {
      add: function(item){
        counter++
        notifications.push({
          id: counter,
          title: item.title,
          type: item.type,
          content: item.content + counter
        })
      },
      remove: function(item, cb){
        notifications = notifications.filter(i=>{
          return item.id != i.id;
        })
      },
      removeGroup: function(){
        notifications = notifications.slice(notifications.length - (limit -1));
      },
      get: function(){
        return notifications;
      },
      limit: function() {
        return limit;
      }
    };
  });
