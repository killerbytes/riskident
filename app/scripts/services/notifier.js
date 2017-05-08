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
    var _limit = 5;
    // Public API here
    function add(item){
      counter++;
      notifications.push({
        id: counter,
        title: item.title,
        type: item.type,
        content: item.content
      })
    }

    function remove(item){
      notifications = notifications.filter(function(i){
        return item.id != i.id;
      })
    }

    function removeGroup(){
      notifications = notifications.slice(notifications.length - (_limit -1));
    }

    function get(){
      return notifications;
    }

    function limit() {
      return _limit;
    }

    return {
      add: add,
      remove: remove,
      removeGroup: removeGroup,
      get: get,
      limit: limit
    };
  });
